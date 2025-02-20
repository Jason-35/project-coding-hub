package com.projectcodingthub.project_coding_hub.message.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.projectcodingthub.project_coding_hub.message.dto.MessageDTO;

@Controller
public class WsMessageController {

    @Autowired
    private SimpMessageSendingOperations template;

    WsMessageController() {}

    @MessageMapping("/message/channel/{channelId}")
    public void chatMessage(@DestinationVariable String channelId, @Payload MessageDTO messageDTO){
        
        template.convertAndSend("/topic/channel/" + channelId, "hello chat");
    }
}
