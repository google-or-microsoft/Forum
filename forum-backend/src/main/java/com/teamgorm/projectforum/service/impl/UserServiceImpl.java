package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.exception.NoDataFoundException;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> getById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getByName(String username) {
        return userRepository.findByName(username);
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
            throw new NoDataFoundException(user.getName());
        }
    }

    @Override
    public void deleteById(String id) {
        userRepository.deleteById(id);
    }

}
