package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new CustomizeException(ErrorCode.USER_NOT_FOUND, id));
    }

    @Override
    public User getByName(String username) {
        return userRepository.findByName(username)
                .orElseThrow(() -> new CustomizeException(ErrorCode.USER_NOT_FOUND, username));
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(String id, User user) {
        if (userRepository.existsById(id)) {
            // Overwrites the user's id if doesn't match with id
            user.setId(id);
            return userRepository.save(user);
        } else {
            throw new CustomizeException(ErrorCode.USER_NOT_FOUND, user.getName());
        }
    }

    @Override
    public void deleteById(String id) {
        userRepository.deleteById(id);
    }

}
