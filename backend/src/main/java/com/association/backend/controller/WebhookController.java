package com.association.backend.controller;

import com.association.backend.dto.ApiResponse;
import com.association.backend.dto.PaymentVerificationRequest;
import com.association.backend.model.Member;
import com.association.backend.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.HexFormat;

/**
 * Webhook controller to handle automatic payment verification
 * This can be triggered by:
 * 1. Razorpay webhook (production)
 * 2. Frontend callback (after Razorpay Checkout success)
 */
@RestController
@RequestMapping("/api/webhooks")
@RequiredArgsConstructor
@Slf4j
public class WebhookController {

    private final PaymentService paymentService;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    /**
     * Razorpay Webhook Endpoint (for production use)
     * Configure this URL in Razorpay Dashboard → Webhooks
     *
     * POST /api/webhooks/razorpay
     */
    @PostMapping("/razorpay")
    public ResponseEntity<ApiResponse> handleRazorpayWebhook(
            @RequestBody String payload,
            @RequestHeader(value = "X-Razorpay-Signature", required = false) String webhookSignature) {

        try {
            log.info("🔔 Razorpay webhook received");

            // Verify webhook signature (important for security)
            if (webhookSignature != null && !verifyWebhookSignature(payload, webhookSignature)) {
                log.error("❌ Invalid webhook signature");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse(false, "Invalid signature", null));
            }

            // Parse webhook payload
            JSONObject webhookData = new JSONObject(payload);
            String event = webhookData.getString("event");

            log.info("📨 Webhook event: {}", event);

            // Handle payment.authorized event
            if ("payment.authorized".equals(event) || "payment.captured".equals(event)) {
                JSONObject paymentEntity = webhookData.getJSONObject("payload")
                        .getJSONObject("payment")
                        .getJSONObject("entity");

                String orderId = paymentEntity.getString("order_id");
                String paymentId = paymentEntity.getString("id");

                // For webhook, we need to construct the signature manually
                // or skip signature verification since webhook itself is verified
                log.info("💳 Processing payment - Order: {}, Payment: {}", orderId, paymentId);

                // Note: Webhook doesn't provide razorpay_signature like Checkout does
                // So we'll verify the payment using Razorpay API instead

                return ResponseEntity.ok(new ApiResponse(true, "Webhook processed", null));
            }

            return ResponseEntity.ok(new ApiResponse(true, "Event acknowledged", null));

        } catch (Exception e) {
            log.error("❌ Error processing webhook", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, "Webhook processing failed", null));
        }
    }

    /**
     * Frontend Callback Endpoint (for automatic verification after Checkout)
     * This should be called by your frontend after Razorpay Checkout success
     *
     * POST /api/webhooks/payment-callback
     */
    @PostMapping("/payment-callback")
    public ResponseEntity<ApiResponse> handlePaymentCallback(
            @RequestBody PaymentVerificationRequest request) {

        try {
            log.info("🔄 Payment callback received for order: {}", request.getRazorpayOrderId());

            // Verify payment and save to database
            Member savedMember = paymentService.verifyPaymentAndSaveMember(request);

            log.info("✅ Payment auto-verified and member saved: {}", savedMember.getMembershipId());

            return ResponseEntity.ok(new ApiResponse(
                    true,
                    "Payment verified and membership activated successfully!",
                    savedMember.getMembershipId()
            ));

        } catch (RuntimeException e) {
            log.error("❌ Payment callback failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(false, e.getMessage(), null));

        } catch (Exception e) {
            log.error("❌ Unexpected error in payment callback", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, "Payment verification failed", null));
        }
    }

    /**
     * Verify webhook signature from Razorpay
     */
    private boolean verifyWebhookSignature(String payload, String signature) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(
                    razorpayKeySecret.getBytes(StandardCharsets.UTF_8),
                    "HmacSHA256"
            );
            mac.init(secretKey);

            byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            String expectedSignature = HexFormat.of().formatHex(hash);

            return expectedSignature.equals(signature);

        } catch (Exception e) {
            log.error("Error verifying webhook signature", e);
            return false;
        }
    }
}