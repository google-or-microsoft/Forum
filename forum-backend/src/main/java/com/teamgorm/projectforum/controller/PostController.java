package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.service.PostService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Post Controller
 */
@CrossOrigin
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    /**
     * Create a new post
     *
     * @param post The post created
     * @return
     */
    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_USER','ROLE_ADMIN')")
    public Post create(@RequestBody Post post) {
        return postService.create(post);
    }

    /**
     * Get a single post by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Post get(@PathVariable ObjectId id) {
        return postService.getById(id);
    }

    /**
     * Get posts by username
     *
     * @param id
     * @return
     */
    @GetMapping("/user/{id}")
    public List<Post> getByUserId(@PathVariable(value = "id") ObjectId id) {
        return postService.getByUserId(id);
    }

    /**
     * Get all posts
     *
     * @return
     */
    @GetMapping
    public List<PostDTO> getAll() {
        return postService.getAll();
    }

    /**
     * Update a post by id
     *
     * @param id
     * @param post
     * @return
     */
    @PutMapping("/{id}")
    public Post update(@PathVariable ObjectId id, @RequestBody Post post) {
        return postService.update(id, post);
    }

    /**
     * Delete a post by id
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable ObjectId id) {
        postService.deleteById(id);
    }
}
