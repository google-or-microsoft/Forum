package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {

    List<Post> findByUserId(String userId);

    Page<Post> findByUserId(String userId, Pageable pageable);
}
