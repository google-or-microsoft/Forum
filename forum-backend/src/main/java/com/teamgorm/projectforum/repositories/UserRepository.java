package com.teamgorm.projectforum.repositories;

import com.teamgorm.projectforum.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
