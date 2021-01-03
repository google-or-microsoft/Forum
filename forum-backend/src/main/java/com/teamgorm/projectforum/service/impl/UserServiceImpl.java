package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> getUserByName(String username) {
        return userRepository.findByName(username);
    }

    @Override
    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }
}
