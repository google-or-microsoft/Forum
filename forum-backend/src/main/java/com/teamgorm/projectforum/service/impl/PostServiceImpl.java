package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Post create(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post getById(String id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new CustomizeException(ErrorCode.POST_NOT_FOUND, id));
    }

    @Override
    public List<Post> getByUsername(String username) {
        return userRepository.findByName(username)
                .map((user) -> postRepository.findAllByUsername(username))
                .orElseThrow(() -> new CustomizeException(ErrorCode.USER_NOT_FOUND, username));
    }

    @Override
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @Override
    public Post update(String id, Post post) {
        if (postRepository.existsById(id)) {
            // Overwrites the post's id if doesn't match with id
            post.setId(id);
            return postRepository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found.");
        }
    }

    @Override
    public void deleteById(String id) {
        postRepository.deleteById(id);
    }
}
