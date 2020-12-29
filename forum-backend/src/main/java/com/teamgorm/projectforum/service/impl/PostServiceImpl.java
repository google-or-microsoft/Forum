package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Post> getByUserName(String userName) {
        User user = userRepository.findByName(userName);
        //TODO: Implement polymorphism exception throwing process
        // ie: UserNotFoundException
        if (user != null) {
            return postRepository.findAllByUserName(userName);
        }
        return null;
    }
}
