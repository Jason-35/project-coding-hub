package com.projectcodingthub.project_coding_hub.server.controller;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.server.dto.JoinRequestDTO;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.server.service.ServerService;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.service.UserServerService;

@RestController
@RequestMapping("/server")
public class ServerController {

    private final ServerService serverService;
    private final UserServerService userServerService;

    public ServerController(ServerService serverService, UserServerService userServerService) {
        this.serverService = serverService;
        this.userServerService = userServerService;
    }

    @GetMapping("get/all")
    public ResponseEntity<List<Server>> getAllServer() {
        return ResponseEntity.ok(serverService.getAllServers());
    }

    @GetMapping("get/{serverId}/name")
    public ResponseEntity<String> getServerTitle(@PathVariable UUID serverId) {
        return ResponseEntity.ok(serverService.getServerName(serverId));
    }

    @GetMapping("get/{userId}")
    public ResponseEntity<List<Server>> getUserServer(@PathVariable Integer userId) {
        List<Server> ownedServer = serverService.getUserServers(userId);
        List<Server> memberServer = serverService.getMemberOfServers(userId);
        ownedServer.addAll(memberServer);
        return ResponseEntity.ok(ownedServer);
    }

    @PostMapping("/join")
    public String userJoinsServer(@RequestBody JoinRequestDTO joinRequestDTO) {
        User user = this.userServerService.getUser(joinRequestDTO.getUserId());
        Server server = this.serverService.getServerByUUID(joinRequestDTO.getServerId());
        server.joinServer(user);
        this.serverService.saveServer(server);
        return "200 ok";
    }


}
