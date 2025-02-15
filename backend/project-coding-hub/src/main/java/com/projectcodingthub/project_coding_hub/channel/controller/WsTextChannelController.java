package com.projectcodingthub.project_coding_hub.channel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.projectcodingthub.project_coding_hub.inbox.dto.ServerRequestDTO;
import com.projectcodingthub.project_coding_hub.inbox.dto.UserDTO;
import com.projectcodingthub.project_coding_hub.inbox.service.InboxService;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.user.model.User;

@Controller
public class WsTextChannelController {
    @Autowired
    private SimpMessageSendingOperations template;

    @MessageMapping("/create/channel/{serverId}")
    public void createchannel(@DestinationVariable String serverId) throws Exception {
        System.out.println("I have recieved it!");
        template.convertAndSend("/topic/create/channel/" + serverId, "sent back");
    }
}
