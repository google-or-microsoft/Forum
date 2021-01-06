package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public Post create(@RequestBody Post post) {
        return postService.create(post);
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable String id) {
        return postService.getById(id);
    }

    @GetMapping("/user/{username}")
    public List<Post> getByUserName(@PathVariable(value = "username") String username) {
        return postService.getByUsername(username);
    }

    @GetMapping
    public List<Post> getAll() {
        return postService.getAll();
    }

    @PutMapping("/{id}")
    public Post update(@PathVariable String id, @RequestBody Post post) {
        return postService.update(id, post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        postService.deleteById(id);
    }
}
