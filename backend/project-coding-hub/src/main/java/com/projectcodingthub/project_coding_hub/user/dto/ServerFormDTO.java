package com.projectcodingthub.project_coding_hub.user.dto;

public class ServerFormDTO {
    String serverDescription;
    String serverImg;
    String serverName;
    boolean serverStatus;
    String[] serverTags;

    public ServerFormDTO(
        String serverDescription,
        String serverImg,
        String serverName,
        boolean serverStatus,
        String[] serverTags) {
            this.serverDescription = serverDescription;
            this.serverImg = serverImg;
            this.serverName = serverName;
            this.serverStatus = serverStatus;
            this.serverTags = serverTags;
    }

    public String getServerDescription() {
        return this.serverDescription;
    }

    public String getServerImg() {
        return this.serverImg;
    }

    public String getServerName() {
        return this.serverName;
    }

    public boolean getServerStatus() {
        return this.serverStatus;
    }

    public String[] getServerTags() {
        return this.serverTags;
    }

}
