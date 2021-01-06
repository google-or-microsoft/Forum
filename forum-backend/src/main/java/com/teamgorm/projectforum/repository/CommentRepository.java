package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findAllByPostId(String id);
}
