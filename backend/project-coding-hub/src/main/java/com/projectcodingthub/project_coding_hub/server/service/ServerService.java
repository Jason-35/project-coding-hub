package com.projectcodingthub.project_coding_hub.server.service;

import java.util.List;
import java.util.Set;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.user.model.User;

@Service
public class ServerService {

    private final ServerRepository serverRepository;

    public ServerService(ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
    }
    
    public List<Server> getUserServers(Integer userId) {
        return serverRepository.findAllByOwner_Id(userId).get();
    }

    public List<Server> getAllServers() {
        return serverRepository.findAll();
    }

    public void saveServer(Server server) {
        serverRepository.save(server);
    }

    public Server getServerByUUID(UUID serverId) {
        return serverRepository.findById(serverId).get();
    }

    public List<Server> getMemberOfServers(Integer userId) {
        return serverRepository.findMemberOfServers(userId).get();
    }

    public String getServerName(UUID id) {
        return serverRepository.findServerName(id).get();
    }

    public Set<User> getUsersFromServer(UUID serverId) {
        return serverRepository.findAllUserOfServer(serverId).get();
    }
    
}
