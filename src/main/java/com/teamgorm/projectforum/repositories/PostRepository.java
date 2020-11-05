package com.teamgorm.projectforum.repositories;

import com.teamgorm.projectforum.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
