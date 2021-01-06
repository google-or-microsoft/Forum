package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.Comment;

import java.util.List;

public interface CommentService {

    Comment create(Comment comment);

    Comment getById(String id);

    List<Comment> getByPostId(String id);

    Comment update(String id, Comment comment);

    void deleteById(String id);


}
