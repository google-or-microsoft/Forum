package com.teamgorm.projectforum.dto;

import com.teamgorm.projectforum.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor

public class PostDTO {

    private String id;

    private Date date;

    private String title;

    private String text;

    private User user;
}
