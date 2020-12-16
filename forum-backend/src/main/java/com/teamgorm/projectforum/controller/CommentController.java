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
    public Optional<Comment> get(@PathVariable(value = "id") Long id) {
        return commentRepository.findById(id);
    }

    @PostMapping
    public Comment create(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        commentRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Comment update(@PathVariable Long id, @RequestBody Comment comment) {
        Optional<Comment> existingComment = commentRepository.findById(id);
        BeanUtils.copyProperties(comment, existingComment, "id");
        return commentRepository.save(existingComment.get());
    }
}
