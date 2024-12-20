package com.projectcodingthub.project_coding_hub.inbox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import com.projectcodingthub.project_coding_hub.inbox.dto.UserDTO;
import com.projectcodingthub.project_coding_hub.inbox.service.InboxService;

@Controller
public class InboxController {

    // private SimpleMessage
    @Autowired
    private SimpMessageSendingOperations template;

    private final InboxService InboxService;
    public InboxController(InboxService InboxService){
        this.InboxService = InboxService;
    }

    // @SendTo("/topic/notification/{recieverId}")
    @MessageMapping("/request/{serverId}")
    public void requestNotification(@DestinationVariable String serverId, @Payload UserDTO userDto) throws Exception {
        String recieverId = InboxService.getRequestedServerOwnerId(serverId);
        template.convertAndSend("/topic/notification/" + recieverId, "from " + serverId + "to " + recieverId);
    }

}
