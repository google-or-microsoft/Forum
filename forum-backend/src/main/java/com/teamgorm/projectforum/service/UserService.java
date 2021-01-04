package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User create(User user);

    Optional<User> getById(String id);

    Optional<User> getByName(String username);

    List<User> getAll();

    User update(String id, User user);

    void deleteById(String id);

}
