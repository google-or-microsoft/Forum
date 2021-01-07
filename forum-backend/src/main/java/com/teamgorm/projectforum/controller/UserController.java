package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * User Controller
 */
@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Create a new user
     *
     * @param user The user created
     * @return
     */
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    /**
     * Get a single user by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public User get(@PathVariable String id) {
        return userService.getById(id);
    }

    /**
     * Get all users
     *
     * @return
     */
    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }

    /**
     * Update a user by id
     *
     * @param id
     * @param user
     * @return
     */
    @PutMapping("/{id}")
    public User update(@PathVariable String id, @RequestBody User user) {
        return userService.update(id, user);
    }

    /**
     * Delete a user by id
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        userService.deleteById(id);
    }

}
