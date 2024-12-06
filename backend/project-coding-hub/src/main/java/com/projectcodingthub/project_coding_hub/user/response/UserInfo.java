package com.projectcodingthub.project_coding_hub.user.response;

public class UserInfo {
    private String username;
    private int id;
    
    public UserInfo(String username, int id) {
        this.username = username;
        this.id = id;
    }


    public void setUsername(String username){
        this.username = username;
    }

    public String getUsername(){
        return this.username;
    }

    public int getId() {
        return this.id;
    }

    // TODO: Get project groups

    // TODO: Get Mail

    // TODO: Get User profile

    // TODO: Get community groups
}
