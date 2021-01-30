package com.teamgorm.projectforum.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Data
@Document(collection = "comments")
public class Comment {
    @Id
    private String id;

    private String text;

    private Date date;

    private String postId;

    private String username;
}
