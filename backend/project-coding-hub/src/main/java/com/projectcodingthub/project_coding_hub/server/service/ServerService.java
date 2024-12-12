package com.projectcodingthub.project_coding_hub.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;

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
    
}
