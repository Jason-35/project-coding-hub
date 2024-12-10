package com.projectcodingthub.project_coding_hub.user.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.user.dto.CreateServerDTO;
import com.projectcodingthub.project_coding_hub.user.dto.ServerFormDTO;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.repository.UserRepository;
import com.projectcodingthub.project_coding_hub.user.response.UserInfo;

@Service
public class UserServerService {

    private final UserRepository userRepository;
    private final ServerRepository serverRepository;

    public UserServerService(UserRepository userRepository, ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
        this.userRepository = userRepository;
    }

    public Server mapDtoToServerModelAndSave(CreateServerDTO createServerDTO) {
        UserInfo userInfo = createServerDTO.getUserInfo();
        ServerFormDTO serverInfo = createServerDTO.getServerFormDTO();

        User owner = userRepository.findById(userInfo.getId()).get();

        Server server = new Server(
            owner, 
            serverInfo.getServerName(), 
            serverInfo.getServerDescription(), 
            serverInfo.getServerImg(), 
            serverInfo.getServerStatus(), 
            serverInfo.getServerTags()
        );

        // System.out.println(serverInfo.getServerImg());
        
        return serverRepository.save(server);
    }

}
