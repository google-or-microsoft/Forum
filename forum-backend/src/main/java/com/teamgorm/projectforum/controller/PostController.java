package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.repository.PostRepository;
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
    private PostRepository postRepository;

    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @GetMapping("/user/{username}")
    public List<Post> getAllByUserName(@PathVariable(value = "username") String username) {
        return postService.getByUsername(username);
    }

    @GetMapping("/{id}")
    public Optional<Post> get(@PathVariable(value = "id") String id) {
        return postRepository.findById(id);
    }

    @PostMapping
    public Post create(@RequestBody Post post) {
        return postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        postRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Post update(@PathVariable String id, @RequestBody Post post) {
        if (postRepository.existsById(id)) {
            // Overwrites the post's id if doesn't match with id
            post.setId(id);
            return postRepository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found.");
        }
    }
}
