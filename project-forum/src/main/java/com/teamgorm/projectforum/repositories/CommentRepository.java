package com.teamgorm.projectforum.repositories;

import com.teamgorm.projectforum.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
