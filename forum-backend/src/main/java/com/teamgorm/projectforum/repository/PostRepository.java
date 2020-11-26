package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByUser(User user);
}
