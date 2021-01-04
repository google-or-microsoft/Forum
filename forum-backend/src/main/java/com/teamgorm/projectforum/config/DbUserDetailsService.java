package com.teamgorm.projectforum.config;

import com.teamgorm.projectforum.exception.NoDataFoundException;
import com.teamgorm.projectforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DbUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userService.getByName(username)
                .map((user) -> {
                    List<SimpleGrantedAuthority> simpleGrantedAuthorities = new ArrayList<>();
                    simpleGrantedAuthorities.add(new SimpleGrantedAuthority("USER"));
                    return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), simpleGrantedAuthorities);
                })
                .orElseThrow(()-> new NoDataFoundException(username));
    }
}