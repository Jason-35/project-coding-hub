package com.projectcodingthub.project_coding_hub.user.service;

import org.springframework.stereotype.Service;

import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.user.repository.UserRepository;

@Service
public class UserServerService {

    private final UserRepository userRepository;
    private final ServerRepository serverRepository;

    public UserServerService(UserRepository userRepository, ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
        this.userRepository = userRepository;
    }
    
}
