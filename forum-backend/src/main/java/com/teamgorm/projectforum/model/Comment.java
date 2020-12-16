package com.teamgorm.projectforum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Document(collection = "comments")
public class Comment {
    @Id
    private Long id;

    private String text;

    private Date date;

    private Post post;

    private User user;
}
