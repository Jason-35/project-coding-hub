package com.projectcodingthub.project_coding_hub.message.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.projectcodingthub.project_coding_hub.channel.model.Channel;
import com.projectcodingthub.project_coding_hub.channel.repository.ChannelRepository;
import com.projectcodingthub.project_coding_hub.message.dto.MessageDTO;
import com.projectcodingthub.project_coding_hub.message.dto.MessageReturnDTO;
import com.projectcodingthub.project_coding_hub.message.model.Message;
import com.projectcodingthub.project_coding_hub.message.service.MessageService;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.service.UserServerService;

@Controller
public class WsMessageController {

    @Autowired
    private SimpMessageSendingOperations template;

    private final MessageService messageService;
    private final ChannelRepository channelRepository;
    private final UserServerService userServerService;

    WsMessageController(MessageService messageService, ChannelRepository channelRepository, UserServerService userServerService) {
        this.messageService = messageService;
        this.channelRepository = channelRepository;
        this.userServerService = userServerService;
    }

    @MessageMapping("/message/channel/{channelId}")
    public void chatMessage(@DestinationVariable String channelId, @Payload MessageDTO messageDTO){
        Integer userId = messageDTO.getUserId();
        UUID UUIDchannelId = UUID.fromString(channelId);
        String message = messageDTO.getMessage();
        
        Channel ch = channelRepository.findById(UUIDchannelId).get();
        User user = userServerService.getUser(userId);
        
        Message msg = new Message(message, ch, user);

        Message savedMsg = messageService.saveMessage(msg);

        MessageReturnDTO messageReturnDTO = new MessageReturnDTO(null, user.getUsername(), message, savedMsg.getId());
        
        template.convertAndSend("/topic/channel/" + channelId, messageReturnDTO);
    }
}
