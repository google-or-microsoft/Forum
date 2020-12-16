package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, Long> {
    List<Post> findAllByUser(User user);
}
