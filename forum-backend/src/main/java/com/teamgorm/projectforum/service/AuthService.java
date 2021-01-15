package com.teamgorm.projectforum.service;

import org.springframework.security.authentication.AuthenticationManager;

public interface AuthService {
    String login(String loginToken, AuthenticationManager authenticationManager);
}
