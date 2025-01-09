package com.projectcodingthub.project_coding_hub.inbox.dto;

public class InvitationResponseDTO {
    public String senderName;
    public String serverName;
    public String mailType;
    public String response;

    public InvitationResponseDTO() {}
    public InvitationResponseDTO(String senderName, String serverName, String mailType, String response) {
        this.senderName = senderName;
        this.serverName = serverName;
        this.mailType = mailType;
        this.response = response;
    }

    public String getSenderName() {
        return this.senderName;
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
