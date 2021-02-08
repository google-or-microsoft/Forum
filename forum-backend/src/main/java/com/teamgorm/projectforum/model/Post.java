package com.teamgorm.projectforum.model;

import lombok.Data;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

@Data
@Document(collection = "posts")
public class Post {
    @Id
    private String id;

    private Date date;

    @TextIndexed
    private String title;

    private String text;

    private String userId;

}


