package com.projectcodingthub.project_coding_hub.inbox.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.user.repository.UserRepository;

@Service
public class InboxService {
    private final UserRepository userRepository;
    private final ServerRepository serverRepository;

    public InboxService(UserRepository userRepository, ServerRepository serverRepository) {
        this.userRepository = userRepository;
        this.serverRepository = serverRepository;
    }

    public String getRequestedServerOwnerId(String serverId) {
        Integer recieverId = serverRepository.findOwnerIdByServerId(UUID.fromString(serverId)).get();
        return String.valueOf(recieverId);
    }
}
