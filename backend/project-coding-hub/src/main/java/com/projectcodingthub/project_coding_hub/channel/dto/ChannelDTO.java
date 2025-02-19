package com.projectcodingthub.project_coding_hub.channel.dto;

import java.util.UUID;

public class ChannelDTO {

    public UUID channelId;
    public String channelName;
    
    public ChannelDTO() {}

    public ChannelDTO(UUID channelId, String channelName) {
        this.channelId = channelId;
        this.channelName = channelName;
    }

    public UUID getChannelId() {
        return this.channelId;
    }

    public String getChannelName() {
        return this.channelName;
    }


}
