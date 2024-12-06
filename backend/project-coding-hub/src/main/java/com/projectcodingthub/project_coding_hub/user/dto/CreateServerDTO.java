package com.projectcodingthub.project_coding_hub.user.dto;

import com.projectcodingthub.project_coding_hub.user.response.UserInfo;

public class CreateServerDTO {
    UserInfo userInfo;
    ServerFormDTO serverData;

    public CreateServerDTO(UserInfo userInfo, ServerFormDTO serverData) {
        this.userInfo = userInfo;
        this.serverData = serverData;
    }

    public UserInfo getUserInfo() {
        return this.userInfo;
    }

    public ServerFormDTO getServerFormDTO() {
        return this.serverData;
    }

    public void printUserInfo() {
        System.out.println(this.userInfo.getId());
        System.out.println(this.userInfo.getUsername());
    }

    public void printServerDataInfo() {
        System.out.println(this.serverData.getServerImg());
        System.out.println(this.serverData.getServerName());
        System.out.println(this.serverData.getServerStatus());
    }
}
