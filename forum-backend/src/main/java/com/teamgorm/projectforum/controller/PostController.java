package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Post get(@PathVariable String id) {
        return postService.getById(id);
    }

    /**
     * Get posts by username
     *
     * @param username
     * @return
     */
    @GetMapping("/user/{username}")
    public List<Post> getByUserName(@PathVariable(value = "username") String username) {
        return postService.getByUsername(username);
    }

    /**
     * Get all posts
     *
     * @return
     */
    @GetMapping
    public List<Post> getAll() {
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
    public Post update(@PathVariable String id, @RequestBody Post post) {
        return postService.update(id, post);
    }

    /**
     * Delete a post by id
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        postService.deleteById(id);
    }
}
