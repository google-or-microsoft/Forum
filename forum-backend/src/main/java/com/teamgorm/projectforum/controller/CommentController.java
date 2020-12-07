package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.Comment;
import com.teamgorm.projectforum.repository.CommentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public Comment get(@PathVariable(value = "id") Long id) {
        return commentRepository.getOne(id);
    }

    @PostMapping
    public Comment create(@RequestBody Comment comment) {
        return commentRepository.saveAndFlush(comment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        commentRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Comment update(@PathVariable Long id, @RequestBody Comment comment) {
        Comment existingComment = commentRepository.getOne(id);
        BeanUtils.copyProperties(comment, existingComment, "id");
        return commentRepository.saveAndFlush(existingComment);
    }
}
