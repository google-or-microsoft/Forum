package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostService {

    Post create(Post post);

    Post getById(String id);

    Page<Post> getByUserId(String id, Pageable pageable);

    Page<PostDTO> getAll(Pageable pageable);

    Post update(String id, Post post);

    void deleteById(String id);
}
