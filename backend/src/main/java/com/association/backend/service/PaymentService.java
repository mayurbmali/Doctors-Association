//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.service;

import com.association.backend.dto.MembershipRegistrationRequest;
import com.association.backend.dto.OrderCreationResponse;
import com.association.backend.dto.PaymentVerificationRequest;
import com.association.backend.model.Member;
import com.association.backend.model.PendingRegistration;
import com.association.backend.repository.MemberRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import lombok.Generated;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentService {
    @Generated
    private static final Logger log = LoggerFactory.getLogger(PaymentService.class);
    private final RazorpayClient razorpayClient;
    private final MemberRepository memberRepository;
    @Value("${membership.fee}")
    private Integer membershipFee;
    @Value("${membership.currency}")
    private String currency;
    @Value("${razorpay.key.id}")
    private String razorpayKeyId;
    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;
    private final Map<String, PendingRegistration> pendingRegistrations = new ConcurrentHashMap();

    public OrderCreationResponse createOrderWithoutPersistence(MembershipRegistrationRequest request) throws RazorpayException {
        try {
            if (this.memberRepository.existsByEmail(request.getEmail())) {
                throw new RuntimeException("This email is already registered with an active membership.");
            } else {
                JSONObject orderRequest = new JSONObject();
                orderRequest.put("amount", this.membershipFee * 100);
                orderRequest.put("currency", this.currency);
                orderRequest.put("receipt", "RECEIPT_" + System.currentTimeMillis());
                JSONObject notes = new JSONObject();
                notes.put("member_name", request.getFullName());
                notes.put("member_email", request.getEmail());
                notes.put("purpose", "Membership Fee");
                orderRequest.put("notes", notes);
                Order order = this.razorpayClient.orders.create(orderRequest);
                String orderId = (String)order.get("id");
                PendingRegistration pendingReg = new PendingRegistration();
                pendingReg.setRazorpayOrderId(orderId);
                pendingReg.setFullName(request.getFullName());
                pendingReg.setEmail(request.getEmail());
                pendingReg.setPhone(request.getPhone());
                pendingReg.setSpecialization(request.getSpecialization());
                pendingReg.setRegistrationNumber(request.getRegistrationNumber());
                pendingReg.setAddress(request.getAddress());
                pendingReg.setCity(request.getCity());
                pendingReg.setState(request.getState());
                pendingReg.setPincode(request.getPincode());
                pendingReg.setNotes(request.getNotes());
                pendingReg.setAmountPaid(this.membershipFee);
                pendingReg.setCreatedAt(LocalDateTime.now());
                this.pendingRegistrations.put(orderId, pendingReg);
                log.info("Razorpay order created (NOT saved to DB). Order ID: {}, Email: {}", orderId, request.getEmail());
                this.cleanupExpiredPendingRegistrations();
                return new OrderCreationResponse(orderId, this.membershipFee, this.currency, (String)null, this.razorpayKeyId, "Order created successfully. Complete payment to activate membership.");
            }
        } catch (RazorpayException e) {
            log.error("Error creating Razorpay order", e);
            throw new RazorpayException("Failed to create payment order: " + e.getMessage());
        }
    }

    @Transactional
    public Member verifyPaymentAndSaveMember(PaymentVerificationRequest request) {
        try {
            PendingRegistration pendingReg = (PendingRegistration)this.pendingRegistrations.get(request.getRazorpayOrderId());
            if (pendingReg == null) {
                log.error("Pending registration not found for order: {}", request.getRazorpayOrderId());
                throw new RuntimeException("Registration data not found. Order may have expired (15 min timeout).");
            } else if (pendingReg.isExpired()) {
                this.pendingRegistrations.remove(request.getRazorpayOrderId());
                throw new RuntimeException("Registration expired. Please register again.");
            } else {
                boolean isValidSignature = this.verifySignature(request.getRazorpayOrderId(), request.getRazorpayPaymentId(), request.getRazorpaySignature());
                if (!isValidSignature) {
                    log.error("Invalid payment signature for order: {}", request.getRazorpayOrderId());
                    throw new RuntimeException("Payment verification failed. Invalid signature.");
                } else if (this.memberRepository.existsByEmail(pendingReg.getEmail())) {
                    throw new RuntimeException("This email is already registered.");
                } else {
                    Member member = new Member();
                    member.setFullName(pendingReg.getFullName());
                    member.setEmail(pendingReg.getEmail());
                    member.setPhone(pendingReg.getPhone());
                    member.setSpecialization(pendingReg.getSpecialization());
                    member.setRegistrationNumber(pendingReg.getRegistrationNumber());
                    member.setAddress(pendingReg.getAddress());
                    member.setCity(pendingReg.getCity());
                    member.setState(pendingReg.getState());
                    member.setPincode(pendingReg.getPincode());
                    member.setNotes(pendingReg.getNotes());
                    member.setRazorpayOrderId(request.getRazorpayOrderId());
                    member.setRazorpayPaymentId(request.getRazorpayPaymentId());
                    member.setRazorpaySignature(request.getRazorpaySignature());
                    member.setAmountPaid(pendingReg.getAmountPaid());
                    member.setPaymentStatus("SUCCESS");
                    member.setPaymentDate(LocalDateTime.now());
                    member.setActive(true);
                    member.setMembershipId(this.generateMembershipId());
                    member.setMembershipStartDate(LocalDateTime.now());
                    member.setCreatedAt(LocalDateTime.now());
                    member.setUpdatedAt(LocalDateTime.now());
                    // Set TTL expiration (1 minute from now for testing)
                    member.setExpiresAt(new Date(System.currentTimeMillis() + (3 * 60 * 1000)));
                    Member savedMember = (Member)this.memberRepository.save(member);
                    this.pendingRegistrations.remove(request.getRazorpayOrderId());
                    log.info("✅ Payment verified and member saved to DB. Membership ID: {}, Email: {}", savedMember.getMembershipId(), savedMember.getEmail());
                    log.info("⏰ Record will auto-expire on: {}", savedMember.getExpiresAt());
                    return savedMember;
                }
            }
        } catch (Exception e) {
            log.error("Error verifying payment and saving member: ", e);
            throw new RuntimeException(e.getMessage());
        }
    }

    private boolean verifySignature(String orderId, String paymentId, String signature) {
        try {
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id", orderId);
            options.put("razorpay_payment_id", paymentId);
            options.put("razorpay_signature", signature);
            boolean isValid = Utils.verifyPaymentSignature(options, this.razorpayKeySecret);
            log.info("Signature verification result: {}", isValid ? "SUCCESS" : "FAILED");
            return isValid;
        } catch (Exception e) {
            log.error("Error verifying signature: ", e);
            return false;
        }
    }

    private String generateMembershipId() {
        long count = this.memberRepository.countByActiveTrue();
        int year = LocalDateTime.now().getYear();
        return String.format("DA%d%04d", year, count + 1L);
    }

    private void cleanupExpiredPendingRegistrations() {
        this.pendingRegistrations.entrySet().removeIf((entry) -> {
            boolean expired = ((PendingRegistration)entry.getValue()).isExpired();
            if (expired) {
                log.info("Cleaned up expired pending registration: {}", entry.getKey());
            }

            return expired;
        });
    }

    public int getPendingRegistrationsCount() {
        return this.pendingRegistrations.size();
    }

    @Generated
    public PaymentService(final RazorpayClient razorpayClient, final MemberRepository memberRepository) {
        this.razorpayClient = razorpayClient;
        this.memberRepository = memberRepository;
    }
}
