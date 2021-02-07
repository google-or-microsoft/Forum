package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.User;
import org.bson.types.ObjectId;

import java.util.List;

public interface UserService {

    User register(User user);

    User getById(ObjectId id);

    User getByName(String username);

    void checkEmailDuplicate(String email);

    void checkUsernameDuplicate(String username);

    List<User> getAll();

    User update(ObjectId id, User user);

    void deleteById(ObjectId id);

}
