package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Resource
    private MongoTemplate mongoTemplate;

    @Override
    public Post create(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post getById(String id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new CustomizeException(ErrorCode.POST_NOT_FOUND, id));
    }

    @Override
    public List<Post> getByUserId(String id) {
        return postRepository.findByUserId(id);
    }


    @Override
    public List<PostDTO> getAll() {
        AddFieldsOperation addFieldsOperation = new AddFieldsOperation("userId",ConvertOperators.ToObjectId.toObjectId("$userId"));
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("users")
                .localField("userId")
                .foreignField("_id")
                .as("user");
        UnwindOperation unwind = Aggregation.unwind("user");
        Aggregation aggregation = Aggregation.newAggregation(addFieldsOperation, lookupOperation, unwind);
        return mongoTemplate.aggregate(aggregation, "posts", PostDTO.class)
                .getMappedResults();
    }

    @Override
    public Post update(String id, Post post) {
        if (postRepository.existsById(id)) {
            // Overwrites the post's id if doesn't match with id
            post.setId(id);
            return postRepository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found.");
        }
    }

    @Override
    public void deleteById(String id) {
        postRepository.deleteById(id);
    }
}
