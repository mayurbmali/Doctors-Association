//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.service;

import com.association.backend.dto.MembershipRegistrationRequest;
import com.association.backend.dto.OrderCreationResponse;
import com.association.backend.model.Member;
import com.association.backend.repository.MemberRepository;
import com.razorpay.RazorpayException;
import java.util.List;
import java.util.Optional;
import lombok.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Generated
    private static final Logger log = LoggerFactory.getLogger(MemberService.class);
    private final MemberRepository memberRepository;
    private final PaymentService paymentService;

    public OrderCreationResponse registerMemberAndCreateOrder(MembershipRegistrationRequest request) throws RazorpayException {
        log.info("Creating order for: {}", request.getEmail());
        OrderCreationResponse orderResponse = this.paymentService.createOrderWithoutPersistence(request);
        return orderResponse;
    }

    public Optional<Member> getMemberById(String id) {
        return this.memberRepository.findById(id);
    }

    public Optional<Member> getMemberByEmail(String email) {
        return this.memberRepository.findByEmail(email);
    }

    public Optional<Member> getMemberByMembershipId(String membershipId) {
        return this.memberRepository.findByMembershipId(membershipId);
    }

    public List<Member> getAllActiveMembers() {
        return this.memberRepository.findAll().stream().filter(Member::getActive).toList();
    }

    public long getActiveMembersCount() {
        return this.memberRepository.countByActiveTrue();
    }

    public boolean emailExists(String email) {
        return this.memberRepository.existsByEmail(email);
    }

    @Generated
    public MemberService(final MemberRepository memberRepository, final PaymentService paymentService) {
        this.memberRepository = memberRepository;
        this.paymentService = paymentService;
    }
}
