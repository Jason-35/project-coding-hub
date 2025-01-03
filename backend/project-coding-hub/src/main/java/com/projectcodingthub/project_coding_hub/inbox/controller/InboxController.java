package com.projectcodingthub.project_coding_hub.inbox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import com.projectcodingthub.project_coding_hub.inbox.dto.ServerRequestDTO;
import com.projectcodingthub.project_coding_hub.inbox.dto.UserDTO;
import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;
import com.projectcodingthub.project_coding_hub.inbox.repository.InboxRepository;
import com.projectcodingthub.project_coding_hub.inbox.service.InboxService;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.service.UserServerService;

@Controller
public class InboxController {

    // private SimpleMessage
    @Autowired
    private SimpMessageSendingOperations template;

    private final InboxService InboxService;
    private final UserServerService userServerService; 
    public InboxController(InboxService InboxService, UserServerService userServerService){
        this.InboxService = InboxService;
        this.userServerService = userServerService;
    }

    @MessageMapping("/request/{serverId}")
    public void requestNotification(@DestinationVariable String serverId, @Payload UserDTO userDto) throws Exception {
        String recieverId = InboxService.getRequestedServerOwnerId(serverId);
        User sender = userServerService.getUser(userDto.getId());
        User server_owner = InboxService.getRequestedServerOwner(serverId);
        Server server = InboxService.getRequestedServer(serverId);
        InboxService.saveInbox(server_owner, sender, true);
        ServerRequestDTO serverRequest = new ServerRequestDTO(userDto.getUsername(), server.getName(), "Friday 1:42 pm");
        template.convertAndSend("/topic/notification/" + recieverId, serverRequest);
    }

}
