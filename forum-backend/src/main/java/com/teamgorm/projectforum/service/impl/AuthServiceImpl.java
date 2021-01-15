package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.dto.LoginDTO;
import com.teamgorm.projectforum.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class AuthServiceImpl implements AuthService {

    public static LoginDTO decodeToken(String loginToken) {
        String encodedString = loginToken.substring(6);
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
        String[] decodedStrings = new String(decodedBytes).split(":");
        return new LoginDTO(decodedStrings[0], decodedStrings[1]);
    }

    @Override
    public String login(String loginToken, AuthenticationManager authenticationManager) {
        LoginDTO loginDTO = decodeToken(loginToken);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
        Authentication authenticate = authenticationManager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String username = (String) authenticate.getPrincipal();
        return username;

    }
}
