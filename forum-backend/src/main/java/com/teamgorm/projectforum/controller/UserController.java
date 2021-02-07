package com.teamgorm.projectforum.controller;


import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.service.UserService;
import org.bson.types.ObjectId;
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
     * Get a single user by id
     *
     * @param username
     * @return
     */
    @GetMapping("/{username}")
    public User get(@PathVariable String username) {
        return userService.getByName(username);
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
    public User update(@PathVariable ObjectId id, @RequestBody User user) {
        return userService.update(id, user);
    }


}
