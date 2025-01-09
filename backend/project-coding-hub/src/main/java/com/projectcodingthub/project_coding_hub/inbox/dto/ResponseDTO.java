package com.projectcodingthub.project_coding_hub.inbox.dto;

import java.util.UUID;

public class ResponseDTO {
    public Integer senderId;
    public Integer recieverId;
    public String serverName;
    public String mailType;
    public String response;

    public ResponseDTO() {}

    public Integer getSenderId() {
        return this.senderId;
    }

    public Integer getRecieverId() {
        return this.recieverId;
    }

    public String getServerName() {
        return this.serverName;
    }

    public String getMailType() {
        return this.mailType;
    }

    public String getResponse() {
        return this.response;
    }
}
