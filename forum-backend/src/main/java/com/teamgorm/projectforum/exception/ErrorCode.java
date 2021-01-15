package com.teamgorm.projectforum.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.http.HttpStatus;


@ToString
@AllArgsConstructor
@Getter
public enum ErrorCode {
    USER_NOT_FOUND("User not found", HttpStatus.NOT_FOUND),
    COMMENT_NOT_FOUND("Comment not found", HttpStatus.NOT_FOUND),
    POST_NOT_FOUND("Post not found", HttpStatus.NOT_FOUND),
    EMAIL_EXISTS("Email has already exists", HttpStatus.CONFLICT),
    USERNAME_EXISTS("Username has already been used", HttpStatus.CONFLICT);

    private String message;
    private HttpStatus status;

}