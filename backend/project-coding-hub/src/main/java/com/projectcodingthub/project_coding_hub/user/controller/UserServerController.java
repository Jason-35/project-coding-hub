package com.projectcodingthub.project_coding_hub.user.controller;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.user.dto.CreateServerDTO;
import com.projectcodingthub.project_coding_hub.user.service.UserServerService;

@RestController
@RequestMapping("/user/server")
public class UserServerController {

    private final UserServerService userServerService;

    public UserServerController(UserServerService userServerService) {
        this.userServerService = userServerService;
    }
    
    @PostMapping("create")
    public ResponseEntity<UUID> createServer(@RequestBody CreateServerDTO createServerDTO) {
        Server savedserver = userServerService.mapDtoToServerModelAndSave(createServerDTO);
        return ResponseEntity.ok(savedserver.getId());
    }

}
