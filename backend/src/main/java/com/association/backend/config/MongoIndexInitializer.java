package com.association.backend.config;

import com.association.backend.model.Member;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.index.IndexOperations;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
@RequiredArgsConstructor
@Slf4j
public class MongoIndexInitializer {

    private final MongoTemplate mongoTemplate;
    @PostConstruct
    public void initIndexes() {
        log.info("🔧 Initializing MongoDB indexes...");

        try {
            IndexOperations indexOps = mongoTemplate.indexOps(Member.class);

            // TTL index
            Index ttlIndex = new Index()
                    .on("expiresAt", Sort.Direction.ASC)
                    .named("expiresAt_ttl")
                    .expire(0, TimeUnit.SECONDS); // Expire immediately when time passes

            indexOps.createIndex(ttlIndex);  // ✅ use createIndex instead of ensureIndex

            log.info("✅ TTL Index created/verified on 'expiresAt' field");

            // Unique index on email
            Index emailIndex = new Index()
                    .on("email", Sort.Direction.ASC)
                    .named("email_unique")
                    .unique();

            indexOps.createIndex(emailIndex);

            log.info("✅ Unique Index created/verified on 'email' field");

            // Unique sparse index on membershipId
            Index membershipIndex = new Index()
                    .on("membershipId", Sort.Direction.ASC)
                    .named("membershipId_unique")
                    .unique()
                    .sparse();

            indexOps.createIndex(membershipIndex);

            log.info("✅ Unique Index created/verified on 'membershipId' field");

            // List all indexes
            indexOps.getIndexInfo().forEach(indexInfo ->
                    log.info("📋 Index: {} - {}", indexInfo.getName(), indexInfo.getIndexFields())
            );

        } catch (Exception e) {
            log.error("❌ Error creating indexes", e);
        }
    }

}