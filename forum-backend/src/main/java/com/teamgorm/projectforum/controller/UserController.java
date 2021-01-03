package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> list() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> get(@PathVariable(value = "id") String id) {
        return ResponseEntity.of(userService.getUserById(id));
    }

    @PostMapping("/users")
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/users/{id}")
    public User update(@PathVariable String id, @RequestBody User user) {
        if(userRepository.existsById(id)) {
            // Overwrites the user's id if doesn't match with id
            user.setId(id);
            return userRepository.save(user);
        } else {
            throw new IllegalArgumentException("User not found.");
        }
    }
}
