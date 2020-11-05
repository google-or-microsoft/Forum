package com.teamgorm.projectforum.controllers;

import com.teamgorm.projectforum.models.Post;
import com.teamgorm.projectforum.repositories.PostRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping("/api/v1/posts")
    public List<Post> getAll(){
        return postRepository.findAll();
    }

    @GetMapping("/api/v1/posts/{id}")
    public Post get(@PathVariable(value="id") Long id){
        return postRepository.getOne(id);
    }

    @PostMapping("/api/v1/posts")
    public Post create(@RequestBody final Post post){
        return postRepository.saveAndFlush(post);
    }

    @DeleteMapping("/api/v1/posts/{id}")
    public void delete(@PathVariable(value="id") Long id){
        postRepository.deleteById(id);
    }

    @PutMapping("/api/v1/posts/{id}")
    public Post update(@PathVariable Long id, @RequestBody Post post){
        Post existingPost = postRepository.getOne(id);
        BeanUtils.copyProperties(post, existingPost, "post_id");
        return postRepository.saveAndFlush(existingPost);
    }
}
