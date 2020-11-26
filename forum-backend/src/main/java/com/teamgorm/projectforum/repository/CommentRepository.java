package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
