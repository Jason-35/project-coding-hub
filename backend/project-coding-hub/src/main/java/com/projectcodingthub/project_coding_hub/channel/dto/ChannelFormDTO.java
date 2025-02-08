package com.projectcodingthub.project_coding_hub.channel.dto;

import java.util.UUID;

public class ChannelFormDTO {
    public String channelName;
    public String channelType;
    public UUID serverId;

    public ChannelFormDTO() {}

    public ChannelFormDTO(String channelName, String channelType, UUID serverId) {
        this.channelName = channelName;
        this.channelType = channelType;
        this.serverId = serverId;
    }

    public String getChannelName() {
        return this.channelName;
    }

    public String getChannelType() {
        return this.channelType;
    }

    public UUID getServerId() {
        return this.serverId;
    }
}
