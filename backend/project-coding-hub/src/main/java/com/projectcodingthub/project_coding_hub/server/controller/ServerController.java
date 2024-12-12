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

import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.repository.ServerRepository;
import com.projectcodingthub.project_coding_hub.server.service.ServerService;

@RestController
@RequestMapping("/server")
public class ServerController {

    private final ServerRepository serverRepository;
    private final ServerService serverService;

    public ServerController(ServerRepository serverRepository, ServerService serverService) {
        this.serverRepository = serverRepository;
        this.serverService = serverService;
    }

    @GetMapping("get/all")
    public List<Server> getAllServer() {
        return serverRepository.findAll();
    }

    @GetMapping("get/one")
    public ResponseEntity<List<Server>> getUserServer() {
        Optional<List<Server>> servers = serverRepository.findAllByOwner_Id(1);
        return ResponseEntity.ok(servers.get());
    }

}
