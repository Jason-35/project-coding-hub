package com.projectcodingthub.project_coding_hub.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import com.projectcodingthub.project_coding_hub.notification.dto.UserDTO;
import com.projectcodingthub.project_coding_hub.notification.service.NotificationService;

@Controller
public class NotificationController {

    // private SimpleMessage
    @Autowired
    private SimpMessageSendingOperations template;

    private final NotificationService notificationService;
    public NotificationController(NotificationService notificationService){
        this.notificationService = notificationService;
    }

    // @SendTo("/topic/notification/{recieverId}")
    @MessageMapping("/request/{serverId}")
    public void requestNotification(@DestinationVariable String serverId, @Payload UserDTO userDto) throws Exception {
        String recieverId = notificationService.getRequestedServerOwnerId(serverId);
        template.convertAndSend("/topic/notification/" + recieverId, "from " + serverId + "to " + recieverId);
    }

}
