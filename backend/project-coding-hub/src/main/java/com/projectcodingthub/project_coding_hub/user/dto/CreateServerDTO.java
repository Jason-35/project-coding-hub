package com.projectcodingthub.project_coding_hub.user.dto;

import com.projectcodingthub.project_coding_hub.user.response.UserInfo;

public class CreateServerDTO {
    UserInfo userInfo;
    ServerFormDTO serverFormDTO;

    public CreateServerDTO(UserInfo userInfo, ServerFormDTO serverFormDTO) {
        this.userInfo = userInfo;
        this.serverFormDTO = serverFormDTO;
    }
}
