
package com.association.backend.controller;

import com.association.backend.dto.ApiResponse;
import com.association.backend.dto.MembershipRegistrationRequest;
import com.association.backend.dto.OrderCreationResponse;
import com.association.backend.dto.PaymentVerificationRequest;
import com.association.backend.dto.PaymentVerificationResponse;
import com.association.backend.model.Member;
import com.association.backend.service.MemberService;
import com.association.backend.service.PaymentService;
import jakarta.validation.Valid;
import lombok.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api/membership"})
public class MembershipController {
    @Generated
    private static final Logger log = LoggerFactory.getLogger(MembershipController.class);
    private final MemberService memberService;
    private final PaymentService paymentService;

    @PostMapping({"/register"})
    public ResponseEntity<ApiResponse> registerMember(@RequestBody @Valid MembershipRegistrationRequest request) {
        try {
            log.info("\ud83d\udcdd Registration request received for: {}", request.getEmail());
            OrderCreationResponse orderResponse = this.memberService.registerMemberAndCreateOrder(request);
            log.info("✅ Order created successfully. Order ID: {}", orderResponse.getOrderId());
            return ResponseEntity.ok(new ApiResponse(true, "Order created successfully. Please complete the payment within 15 minutes.", orderResponse));
        } catch (RuntimeException e) {
            log.error("❌ Registration failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(false, e.getMessage(), (Object)null));
        } catch (Exception e) {
            log.error("❌ Unexpected error during registration", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, "Registration failed. Please try again.", (Object)null));
        }
    }

    @PostMapping({"/verify-payment"})
    public ResponseEntity<ApiResponse> verifyPayment(@RequestBody @Valid PaymentVerificationRequest request) {
        try {
            log.info("\ud83d\udd10 Payment verification request received for order: {}", request.getRazorpayOrderId());
            Member savedMember = this.paymentService.verifyPaymentAndSaveMember(request);
            PaymentVerificationResponse response = new PaymentVerificationResponse(true, "Payment verified successfully! Your membership is now active and will remain valid for 1 day.", savedMember.getMembershipId(), savedMember.getFullName(), savedMember.getEmail());
            log.info("✅ Payment verified and member saved. Membership ID: {}", savedMember.getMembershipId());
            return ResponseEntity.ok(new ApiResponse(true, "Success", response));
        } catch (RuntimeException e) {
            log.error("❌ Payment verification failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(false, e.getMessage(), (Object)null));
        } catch (Exception e) {
            log.error("❌ Unexpected error during verification", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, "Verification failed. Please contact support.", (Object)null));
        }
    }

    @GetMapping({"/check-email"})
    public ResponseEntity<ApiResponse> checkEmail(@RequestParam String email) {
        boolean exists = this.memberService.emailExists(email);
        return ResponseEntity.ok(new ApiResponse(true, exists ? "Email already registered with active membership" : "Email available", exists));
    }

    @GetMapping({"/{membershipId}"})
    public ResponseEntity<ApiResponse> getMemberByMembershipId(@PathVariable String membershipId) {
        return (ResponseEntity)this.memberService.getMemberByMembershipId(membershipId).map((member) -> ResponseEntity.ok(new ApiResponse(true, "Member found", this.maskSensitiveData(member)))).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(false, "Member not found", (Object)null)));
    }

    @GetMapping({"/count"})
    public ResponseEntity<ApiResponse> getActiveMembersCount() {
        long count = this.memberService.getActiveMembersCount();
        return ResponseEntity.ok(new ApiResponse(true, "Active members count retrieved", count));
    }

    @GetMapping({"/pending-count"})
    public ResponseEntity<ApiResponse> getPendingCount() {
        int count = this.paymentService.getPendingRegistrationsCount();
        return ResponseEntity.ok(new ApiResponse(true, "Pending registrations awaiting payment", count));
    }

    @GetMapping({"/health"})
    public ResponseEntity<ApiResponse> healthCheck() {
        return ResponseEntity.ok(new ApiResponse(true, "Service is running", "OK"));
    }

    private Member maskSensitiveData(Member member) {
        Member masked = new Member();
        masked.setMembershipId(member.getMembershipId());
        masked.setFullName(member.getFullName());
        masked.setSpecialization(member.getSpecialization());
        masked.setCity(member.getCity());
        masked.setState(member.getState());
        masked.setActive(member.getActive());
        masked.setMembershipStartDate(member.getMembershipStartDate());
        masked.setExpiresAt(member.getExpiresAt());
        return masked;
    }

    @Generated
    public MembershipController(final MemberService memberService, final PaymentService paymentService) {
        this.memberService = memberService;
        this.paymentService = paymentService;
    }
}
