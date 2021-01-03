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

    @GetMapping("/comments")
    public List<Comment> list() {
        return commentRepository.findAll();
    }

    @GetMapping("/comments/{id}")
    public Optional<Comment> get(@PathVariable(value = "id") String id) {
        return commentRepository.findById(id);
    }

    @PostMapping("/comments")
    public Comment create(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @DeleteMapping("/comments/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        commentRepository.deleteById(id);
    }

    @PutMapping("/comments/{id}")
    public Comment update(@PathVariable String id, @RequestBody Comment comment) {
        if(commentRepository.existsById(id)) {
            // Overwrites the comment's id if doesn't match with id
            comment.setId(id);
            return commentRepository.save(comment);
        } else {
            throw new IllegalArgumentException("Comment not found.");
        }
    }
}
