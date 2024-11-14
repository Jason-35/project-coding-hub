package com.projectcodingthub.TestFolder;

public class LoginUserDTO {
    private String password;
    
    private String email;

    public LoginUserDTO(String email, String password){
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }
}
