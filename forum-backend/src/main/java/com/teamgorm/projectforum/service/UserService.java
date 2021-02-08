package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.User;

import java.util.List;

public interface UserService {

    User register(User user);

    User getById(String id);

    User getByName(String username);

    void checkEmailDuplicate(String email);

    void checkUsernameDuplicate(String username);

    List<User> getAll();

    User update(String id, User user);

    void deleteById(String id);

}
