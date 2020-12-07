package com.teamgorm.projectforum.service;

import com.teamgorm.projectforum.model.User;

public interface UserService {

    User getByUsername(String username);
}
