package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.Comment;

import java.util.Optional;

public interface CommentService {

    Comment create(Comment comment);

    Optional<Comment> getById(String id);

    Comment update(String id, Comment comment);

    void deleteById(String id);

}
