package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.repository.PostAggregationRepository;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostAggregationRepository postAggregationRepository;

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
    public Page<Post> getByUserId(String id, Pageable pageable) {
        return postRepository.findByUserId(id, pageable);
    }

    @Override
    public Page<PostDTO> getAll(Pageable pageable) {
        return postAggregationRepository.findAllWithUser(pageable);
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
