package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.exception.CustomizeException;
import com.teamgorm.projectforum.exception.ErrorCode;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    public void checkEmailDuplicate(String email){
        userRepository.findByEmail(email)
                .ifPresent((user) -> {throw new CustomizeException(ErrorCode.EMAIL_EXISTS,email);});
    }

    @Override
    public void checkUsernameDuplicate(String username){
        userRepository.findByName(username)
                .ifPresent((user)-> {throw new CustomizeException(ErrorCode.USERNAME_EXISTS,username);});
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User register(User user) {
        String username = user.getName();
        String email = user.getEmail();
        String password = user.getPassword();
        checkUsernameDuplicate(username);
        checkEmailDuplicate(email);
        user.setPassword(new BCryptPasswordEncoder().encode(password));
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
        User user = getById(id);
        user.setDeleted(true);
        userRepository.save(user);
    }

}
