package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.Comment;
import com.teamgorm.projectforum.repository.CommentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/api/v1/comments")
    public List<Comment> list() {
        return commentRepository.findAll();
    }

    @GetMapping("/api/v1/comments/{id}")
    public Optional<Comment> get(@PathVariable(value = "id") Long id) {
        return commentRepository.findById(id);
    }

    @PostMapping("/api/v1/comments")
    public Comment create(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @DeleteMapping("/api/v1/comments/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        commentRepository.deleteById(id);
    }

    @PutMapping("/api/v1/comments/{id}")
    public Comment update(@PathVariable Long id, @RequestBody Comment comment) {
        Optional<Comment> existingComment = commentRepository.findById(id);
        BeanUtils.copyProperties(comment, existingComment, "id");
        return commentRepository.save(existingComment.get());
    }
}
