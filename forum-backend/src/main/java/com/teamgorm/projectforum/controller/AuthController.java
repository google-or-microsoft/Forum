package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.dto.LoginDTO;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Base64;

/**
 * Auth Controller
 */
@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;


    @GetMapping("/login")
    public LoginDTO login(HttpServletResponse res) {
        UserDetails principle = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principle.getUsername();
        String password = principle.getPassword();
//        String token = Base64.getEncoder().encodeToString((username+":"+password).getBytes());
//        res.setHeader("Authorization",token);
        return new LoginDTO(username,password,"Success login");
    }

    /**
     * Create a new user
     *
     * @param user The user created
     * @return
     */
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    /**
     * Delete a user by id
     * This action must be taken by ADMIN role
     *
     * @param id
     */
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/admin/{id}")
    public void delete(@PathVariable String id) {
        userService.deleteById(id);
    }
}
