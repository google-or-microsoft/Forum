package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByName(String name);
}
