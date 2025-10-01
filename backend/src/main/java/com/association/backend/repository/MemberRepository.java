//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.repository;

import com.association.backend.model.Member;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends MongoRepository<Member, String> {
    boolean existsByEmail(String email);

    Optional<Member> findByEmail(String email);

    Optional<Member> findByRazorpayOrderId(String razorpayOrderId);

    Optional<Member> findByMembershipId(String membershipId);

    long countByActiveTrue();
}
