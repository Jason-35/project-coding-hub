package com.projectcodingthub.project_coding_hub.message.dto;

public class MessageReturnDTO {
    public String userImg;
    public String userName;
    public String message;
    public Integer messageId;
    
    public MessageReturnDTO(String userImg, String userName, String message, Integer messageId) {
        this.userImg = userImg;
        this.userName = userName;
        this.message = message;
        this.messageId = messageId;
    }

    public String getUserImg() {
        return this.userImg;
    }

    public String getUserName() {
        return this.userName;
    }

    public String getMessage() {
        return this.message;
    }

    public Integer getMessageId() {
        return this.messageId;
    }
}
