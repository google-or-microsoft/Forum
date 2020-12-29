package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> list() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> get(@PathVariable(value = "id") String id) {
        return userRepository.findById(id);
    }

    @PostMapping
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") String id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable String id, @RequestBody User user) {
        Optional<User> existingUser = userRepository.findById(id);
        BeanUtils.copyProperties(user, existingUser, "id");
        if (!existingUser.isPresent()) {
            throw new IllegalStateException("Post not found.");
        }
        return userRepository.save(existingUser.get());
    }
}
