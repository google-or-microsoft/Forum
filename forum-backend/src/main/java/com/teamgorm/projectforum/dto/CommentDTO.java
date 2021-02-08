package com.teamgorm.projectforum.dto;

import com.teamgorm.projectforum.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class CommentDTO {

    private String id;

    private String text;

    private Date date;

    private String postId;

    private User user;
}
