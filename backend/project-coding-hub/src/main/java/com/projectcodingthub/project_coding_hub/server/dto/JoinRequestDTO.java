package com.projectcodingthub.project_coding_hub.server.dto;

import java.util.UUID;

public class JoinRequestDTO {

    public Integer userId;
    public UUID serverId;

    public JoinRequestDTO() {}
    public JoinRequestDTO(Integer userId, UUID serverId) {
        this.userId = userId;
        this.serverId = serverId;
    }
    
    public Integer getUserId() {
        return this.userId;
    }

    public UUID getServerId() {
        return this.serverId;
    }
}
