package com.teamgorm.projectforum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ProjectForumApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectForumApplication.class, args);
    }

}
