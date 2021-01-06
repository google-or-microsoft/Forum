package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findAllByUsername(String username);

}
