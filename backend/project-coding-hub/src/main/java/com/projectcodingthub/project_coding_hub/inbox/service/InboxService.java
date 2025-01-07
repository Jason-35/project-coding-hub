package com.projectcodingthub.project_coding_hub.inbox.service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.inbox.dto.ServerRequestDTO;
import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;
import com.projectcodingthub.project_coding_hub.inbox.repository.InboxRepository;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.repository.UserRepository;

@Service
public class InboxService {
    private final UserRepository userRepository;
    private final ServerRepository serverRepository;
    private final InboxRepository inboxRepository;

    public InboxService(UserRepository userRepository, ServerRepository serverRepository, InboxRepository inboxRepository) {
        this.userRepository = userRepository;
        this.serverRepository = serverRepository;
        this.inboxRepository = inboxRepository;
    }

    public String getRequestedServerOwnerId(String serverId) {
        Integer recieverId = serverRepository.findOwnerIdByServerId(UUID.fromString(serverId)).get();
        return String.valueOf(recieverId);
    }

    public User getRequestedServerOwner(String serverId) {
        User owner = serverRepository.findOwnerByServerId(UUID.fromString(serverId)).get();
        return owner;
    }

    public Server getRequestedServer(String serverId){
        Server server = serverRepository.findServerByServerId(UUID.fromString(serverId)).get();
        return server;
    }

    public Inbox saveInbox(User server_owner, User sender, Server server, boolean b) {
        Inbox inbox = new Inbox(sender, server_owner, server.getId(), server.getName(), b);
        return inboxRepository.save(inbox);
    }

    public List<Inbox> getAllInboxByUser(Integer userId){
        return inboxRepository.getAllInboxByRecipient(userId).get();
    }

    public List<ServerRequestDTO> ListInboxToListServerRequestDTO(List<Inbox> listOfInbox) {
        return listOfInbox.stream().map(inbox -> new ServerRequestDTO(inbox.getSenderName(), inbox.getServerName(), "Friday 1:42 pm")).collect(Collectors.toList());
    }
}
