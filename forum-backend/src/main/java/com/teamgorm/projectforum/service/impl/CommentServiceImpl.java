package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.dto.CommentDTO;
import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.Comment;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.repository.CommentRepository;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.service.CommentService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.aggregation.UnwindOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

/**
 * Comment Service
 */
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private PostRepository postRepository;

    @Resource
    private MongoTemplate mongoTemplate;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<CommentDTO> getByPostId(ObjectId id) {
        LookupOperation lookupOperation = LookupOperation.newLookup()
                .from("users")
                .localField("userId")
                .foreignField("_id")
                .as("user");
        AggregationOperation filterByPostIdOperation = Aggregation.match(Criteria.where("postId").is(id));
        UnwindOperation unwind = Aggregation.unwind("user");
        Aggregation aggregation = Aggregation.newAggregation(lookupOperation,filterByPostIdOperation,unwind);
        System.out.println(id);
        System.out.println(mongoTemplate.aggregate(aggregation,"comments", CommentDTO.class)
                .getMappedResults());
        return mongoTemplate.aggregate(aggregation,"comments", CommentDTO.class)
                .getMappedResults();
    }

    @Override
    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Comment getById(String id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new CustomizeException(ErrorCode.COMMENT_NOT_FOUND, id.toString()));
    }

    @Override
    public Comment update(String id, Comment comment) {
        if (commentRepository.existsById(id)) {
            // Overwrites the comment's id if doesn't match with id
            comment.setId(id);
            return commentRepository.save(comment);
        } else {
            throw new CustomizeException(ErrorCode.COMMENT_NOT_FOUND);
        }
    }

    @Override
    public void deleteById(String id) {
        commentRepository.deleteById(id);
    }
}
