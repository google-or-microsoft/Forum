package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.model.Post;
import org.bson.types.ObjectId;

import java.util.List;

public interface PostService {

    Post create(Post post);

    Post getById(ObjectId id);

    List<Post> getByUserId(ObjectId id);

    List<PostDTO> getAll();

    Post update(ObjectId id, Post post);

    void deleteById(ObjectId id);
}
