package com.teamgorm.projectforum.service.impl;

import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.model.User;
import com.teamgorm.projectforum.repository.PostRepository;
import com.teamgorm.projectforum.repository.UserRepository;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Post> getByAuthor(String author) {
        User user = userRepository.findByName(author);
        //TODO: Implement polymorphism exception throwing process
        // ie: UserNotFoundException
        if (user != null) {
            return postRepository.findAllByUser(user);
        }
        return null;
    }

    @Override
    public List<Post> getAllByUserId(Long id) {
        //TODO: Implement polymorphism exception throwing process
        // ie: UserNotFoundException
        Optional<User> user = userRepository.findById(id);
        if (user != null) {
            return postRepository.findAllByUser(user.get());
        }
        return null;
    }
}
