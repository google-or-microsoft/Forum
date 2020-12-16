package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<Comment, Long> {
}
