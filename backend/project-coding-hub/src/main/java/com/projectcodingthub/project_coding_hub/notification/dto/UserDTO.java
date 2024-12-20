package com.projectcodingthub.project_coding_hub.notification.dto;

public class UserDTO {
    String username;
    Integer id;

    public UserDTO() {}

    public UserDTO(String username, Integer id) {
        this.id = id;
        this.username = username;
    }

    public String getUsername(){
        return this.username;
    }

    public Integer getId() {
        return this.id;
    }
}
