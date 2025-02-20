package com.projectcodingthub.project_coding_hub.message.service;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.message.model.Message;
import com.projectcodingthub.project_coding_hub.message.repository.MessageRepository;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    };

    public Message saveMessage(Message msg) {
        return messageRepository.save(msg);
    }
}
