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
    public List<Post> getAllByUser(@PathVariable(value = "id") Long id) {
        User user = userRepository.getOne(id);
        return postRepository.findAllByUser(user);
    }

    @GetMapping("/{id}")
    public Post get(@PathVariable(value = "id") Long id) {
        return postRepository.getOne(id);
    }

    @PostMapping
    public Post create(@RequestBody final Post post) {
        return postRepository.saveAndFlush(post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        postRepository.deleteById(id);
    }

    // @PreAuthorize("isAuthorize()")
    @PutMapping("/{id}")
    public Post update(@PathVariable Long id, @RequestBody Post post) {
        Post existingPost = postRepository.getOne(id);
        BeanUtils.copyProperties(post, existingPost, "id");
        return postRepository.saveAndFlush(existingPost);
    }
}
