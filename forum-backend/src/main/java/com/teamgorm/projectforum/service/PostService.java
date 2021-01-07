package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    Post create(Post post);

    Post getById(String id);

    List<Post> getByUsername(String username);

    List<Post> getAll();

    Post update(String id, Post post);

    void deleteById(String id);
}
