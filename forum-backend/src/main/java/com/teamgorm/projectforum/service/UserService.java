package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserById(String id);
}
