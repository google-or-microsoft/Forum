package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.dto.CommentDTO;
import com.teamgorm.projectforum.model.Comment;
import com.teamgorm.projectforum.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Comment Controller
 */
@RestController
@CrossOrigin
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    /**
     * Create a new comment
     *
     * @param comment The comment created
     * @return
     */
    @PostMapping
    public Comment create(@RequestBody Comment comment) {
        return commentService.create(comment);
    }

    /**
     * Get a single comment by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Comment get(@PathVariable(value = "id") String id) {
        return commentService.getById(id);
    }

    /**
     * Get comments by postId
     *
     * @param postId
     * @return
     */
    @GetMapping("/post/{postId}")
    public List<CommentDTO> getByPostId(@PathVariable(value = "postId") String postId) {
        return commentService.getByPostId(postId);
    }

    /**
     * Update a comment by id
     *
     * @param id
     * @param comment
     * @return
     */
    @PutMapping("/{id}")
    public Comment update(@PathVariable String id, @RequestBody Comment comment) {
        return commentService.update(id, comment);
    }

    /**
     * Delete a comment by id
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        commentService.deleteById(id);
    }

}
