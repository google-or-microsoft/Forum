package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.Post;

import java.util.List;

public interface PostService {
    List<Post> getByUsername(String userName);
}
