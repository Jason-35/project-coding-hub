package com.projectcodingthub.TestFolder;

public class RegisterUserDTO {
    private String email;
    
    private String password;
    
    private String username;

    public RegisterUserDTO(String email, String username, String password){
        this.email = email;
        this.username = username;
        this.password = password;
    }
    
    public String getEmail() {
        return this.email;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}
