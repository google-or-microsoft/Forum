package com.teamgorm.projectforum.controllers;


import com.teamgorm.projectforum.models.User;
import com.teamgorm.projectforum.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/v1/users")
    public List<User> list(){
        return userRepository.findAll();
    }

    @GetMapping("/api/v1/users/{id}")
    public User get(@PathVariable (value="id") Long id){
        return userRepository.getOne(id);
    }

    @PostMapping("/api/v1/users")
    public User create(@RequestBody User user){
        return userRepository.saveAndFlush(user);
    }

    @DeleteMapping("/api/v1/users/{id}")
    public void delete(@PathVariable (value="id") Long id){
        userRepository.deleteById(id);
    }

    @PutMapping("/api/v1/users/{id}")
    public User update(@PathVariable Long id, @RequestBody User user){
        User existingUser = userRepository.getOne(id);
        BeanUtils.copyProperties(user, existingUser, "id");
        return userRepository.saveAndFlush(existingUser);
    }
}
