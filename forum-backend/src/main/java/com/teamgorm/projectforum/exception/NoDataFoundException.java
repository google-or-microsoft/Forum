package com.teamgorm.projectforum.exception;

import org.springframework.util.StringUtils;

public class NoDataFoundException extends RuntimeException{

    public NoDataFoundException(String name){
        super(String.format("%s not Found.", StringUtils.capitalize(name)));
    }

}
