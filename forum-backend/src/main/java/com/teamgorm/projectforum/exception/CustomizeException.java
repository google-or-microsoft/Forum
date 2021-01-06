package com.teamgorm.projectforum.exception;

import lombok.Getter;

@Getter
public class CustomizeException extends RuntimeException {

    private ErrorCode code;
    private String name;

    public CustomizeException(ErrorCode code) {
        super(code.getMessage());
        this.code = code;
    }

    public CustomizeException(ErrorCode code, String name) {
        super(name == null ? code.getMessage() : String.format("[%s] - %s", name, code.getMessage()));
        this.code = code;
        this.name = name;
    }


}
