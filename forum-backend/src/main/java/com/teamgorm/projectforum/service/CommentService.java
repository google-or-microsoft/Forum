package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.dto.CommentDTO;
import com.teamgorm.projectforum.model.Comment;
import org.bson.types.ObjectId;

import java.util.List;

public interface CommentService {

    Comment create(Comment comment);

    Comment getById(String id);

    List<CommentDTO> getByPostId(String id);

    Comment update(String id, Comment comment);

    void deleteById(String id);

}
