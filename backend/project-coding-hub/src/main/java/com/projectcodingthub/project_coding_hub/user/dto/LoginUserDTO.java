package com.projectcodingthub.project_coding_hub.user.dto;

public class LoginUserDTO {
    private String password;
    private String username;

    public LoginUserDTO(String username, String password){
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}
