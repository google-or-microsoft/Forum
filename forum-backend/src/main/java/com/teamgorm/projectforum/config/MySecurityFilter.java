package com.teamgorm.projectforum.config;

import com.teamgorm.projectforum.dto.LoginDTO;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Base64;

public class MySecurityFilter extends OncePerRequestFilter {
    AuthenticationManager authenticationManager;

    public MySecurityFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        boolean hasError = false;
        String token = httpServletRequest.getHeader("Authorization");
        if (token!=null && !token.isBlank()) {
            LoginDTO loginDTO = decodeToken(token);
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
            try {
                Authentication authenticate = authenticationManager.authenticate(authToken);
                SecurityContextHolder.getContext().setAuthentication(authenticate);
            } catch (BadCredentialsException e) {
                hasError = true;
                httpServletResponse.sendError(HttpStatus.FORBIDDEN.value(), "Login failed");
            }

        }
        if (!hasError) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        }

    }

    public LoginDTO decodeToken(String loginToken) {
        String encodedString = loginToken.substring(6);
        byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
        String[] decodedStrings = new String(decodedBytes).split(":");
        return new LoginDTO(decodedStrings[0], decodedStrings[1]);
    }
}
