package com.projectcodingthub.project_coding_hub.channel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class WsTextChannelController {
    @Autowired
    private SimpMessageSendingOperations template;

    @MessageMapping("/create/channel/{serverId}")
    public void createchannel(@DestinationVariable String serverId, @Payload String channelName) throws Exception {
        template.convertAndSend("/topic/create/channel/" + serverId, channelName);
    }
}
