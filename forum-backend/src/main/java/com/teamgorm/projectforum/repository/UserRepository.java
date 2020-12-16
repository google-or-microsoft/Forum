package com.teamgorm.projectforum.repository;

import com.teamgorm.projectforum.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Long> {
    User findByName(String name);
}
