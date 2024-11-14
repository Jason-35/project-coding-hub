package com.projectcodingthub.project_coding_hub.user.dto;

public class TokenResponse {
    private String token;

    private long expiresIn;

    public TokenResponse() {};

    public TokenResponse(String token, long expiresIn){
        this.token = token;
        this.expiresIn = expiresIn;
    }

    public String getToken() {
        return token;
    }

    public long getExpiresIn() {
        return this.expiresIn;
    }

    public void setToken(String token){
        this.token = token;
    }

    public void setExpiresIn(long expiresIn){
        this.expiresIn = expiresIn;
    }
}