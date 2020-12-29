package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.Comment;
import com.teamgorm.projectforum.repository.CommentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/comments")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;

    @GetMapping
    public List<Comment> list() {
        return commentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Comment> get(@PathVariable(value = "id") String id) {
        return commentRepository.findById(id);
    }

    @PostMapping
    public Comment create(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        commentRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Comment update(@PathVariable String id, @RequestBody Comment comment) {
        Optional<Comment> existingComment = commentRepository.findById(id);
        BeanUtils.copyProperties(comment, existingComment, "id");
        if (!existingComment.isPresent()) {
            throw new IllegalStateException("Post not found.");
        }
        return commentRepository.save(existingComment.get());
    }
}
