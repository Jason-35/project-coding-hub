package com.projectcodingthub.project_coding_hub.inbox.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.inbox.dto.ServerRequestDTO;
import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;
import com.projectcodingthub.project_coding_hub.inbox.service.InboxService;
import com.projectcodingthub.project_coding_hub.server.dto.JoinRequestDTO;
import com.projectcodingthub.project_coding_hub.user.service.UserServerService;

@RestController
public class InboxRestController {

    private final InboxService InboxService;
    private final UserServerService userServerService; 

    public InboxRestController(InboxService InboxService, UserServerService userServerService){
        this.InboxService = InboxService;
        this.userServerService = userServerService;
    }
    
    @GetMapping("/get/{userId}/mail")
    public List<ServerRequestDTO> getAllRecipientMail(@PathVariable Integer userId) {
        List<Inbox> listOfInbox = InboxService.getAllInboxByUser(userId);
        return InboxService.ListInboxToListServerRequestDTO(listOfInbox);
    }

}
