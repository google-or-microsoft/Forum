package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.dto.PostDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author rainyforest
 */
@Service
public class PostAggregationRepositoryImpl implements PostAggregationRepository {

    @Resource
    private MongoTemplate mongoTemplate;

    @Override
    public Page<PostDTO> findAllWithUser(Pageable pageable) {
        AddFieldsOperation addFieldsOperation = new AddFieldsOperation("userId", ConvertOperators.ToObjectId.toObjectId("$userId"));

        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("users")
                .localField("userId")
                .foreignField("_id")
                .as("user");

        UnwindOperation unwind = Aggregation.unwind("user");

        Aggregation aggregation = Aggregation.newAggregation(addFieldsOperation, lookupOperation, unwind);

        List<PostDTO> list = mongoTemplate.aggregate(aggregation, "posts", PostDTO.class)
                .getMappedResults();
        // Paging
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), list.size());
        return new PageImpl<>(list.subList(start, end), pageable, list.size());
    }
}
