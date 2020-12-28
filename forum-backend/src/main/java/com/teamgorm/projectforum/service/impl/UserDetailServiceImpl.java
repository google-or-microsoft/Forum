package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.UserDetailsImpl;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username);
        if (user == null) {
            throw new UsernameNotFoundException("Boom!!!User not found!");
        }
        return new UserDetailsImpl(user);
    }
}
