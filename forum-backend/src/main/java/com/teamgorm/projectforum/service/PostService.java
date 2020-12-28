package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.Post;

import java.util.List;

public interface PostService {
    List<Post> getByAuthor(String author);

    List<Post> getAllByUserId(Long id);
}
