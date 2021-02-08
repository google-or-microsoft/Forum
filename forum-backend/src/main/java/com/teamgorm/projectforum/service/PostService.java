package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.model.Post;

import java.util.List;

public interface PostService {

    Post create(Post post);

    Post getById(String id);

    List<Post> getByUserId(String id);

    List<PostDTO> getAll();

    Post update(String id, Post post);

    void deleteById(String id);
}
