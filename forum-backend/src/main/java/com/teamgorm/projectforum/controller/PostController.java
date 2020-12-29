package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/posts")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public List<Post> getAllByUser(@PathVariable(value = "id") String id) {
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()) {
            throw new IllegalStateException("User not found.");
        }
        String userName = user.get().getName();
        return postRepository.findAllByUserName(userName);
    }

    @GetMapping("/{id}")
    public Optional<Post> get(@PathVariable(value = "id") String id) {
        return postRepository.findById(id);
    }

    @PostMapping
    public Post create(@RequestBody final Post post) {
        return postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        postRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Post update(@PathVariable String id, @RequestBody Post post) {
        Optional<Post> existingPost = postRepository.findById(id);
        BeanUtils.copyProperties(post, existingPost, "id");
        if (!existingPost.isPresent()) {
            throw new IllegalStateException("Post not found.");
        }
        return postRepository.save(existingPost.get());
    }
}
