package com.projectcodingthub.project_coding_hub.message.dto;

public class MessageDTO {
    String message;
    String channelId;
    int userId;
    
    public MessageDTO() {}

    public MessageDTO(String message, String channelId, int userId) {
        this.message = message;
        this.channelId = channelId;
        this.userId = userId;
    }

    public String getMessage() {
        return this.message;
    }

    public String getChannelId() {
        return this.channelId;
    }

    public int getUserId() {
        return this.userId;
    }
    
}
