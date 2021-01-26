package com.teamgorm.projectforum.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginDTO {
    String username;
    String password;
}
