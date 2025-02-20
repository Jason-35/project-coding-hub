package com.projectcodingthub.project_coding_hub.message.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.message.dto.MessageDTO;
import com.projectcodingthub.project_coding_hub.message.dto.MessageReturnDTO;
import com.projectcodingthub.project_coding_hub.message.model.Message;
import com.projectcodingthub.project_coding_hub.message.repository.MessageRepository;

@RestController
public class MessageController {

    private final MessageRepository messageRepository;
    
    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    };

    @GetMapping("/get/channel/{channelId}/messages")
    public List<MessageReturnDTO> getChannelMessages(@PathVariable UUID channelId) {
        List<Message> messages = this.messageRepository.findAllMessagesByChannelId(channelId).get();
        List<MessageReturnDTO> messagesDTO = new ArrayList<>();
        messages.forEach(message -> messagesDTO.add(new MessageReturnDTO(null, message.getUser().getUsername(), message.getMessage(), message.getId())));
        return messagesDTO;
    }
}
