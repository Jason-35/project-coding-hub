package com.projectcodingthub.project_coding_hub.channel.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.channel.dto.ChannelFormDTO;
import com.projectcodingthub.project_coding_hub.channel.model.Channel;
import com.projectcodingthub.project_coding_hub.channel.repository.ChannelRepository;
import com.projectcodingthub.project_coding_hub.inbox.dto.ServerRequestDTO;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.service.ServerService;

@RestController
public class tempController {

    private final ChannelRepository channelRepository;
    private final ServerService serverService;

    tempController(ChannelRepository channelRepository, ServerService serverService){
        this.channelRepository = channelRepository;
        this.serverService = serverService;
    }

    @PostMapping("/channel/create")
    public void getAllRecipientMail(@RequestBody ChannelFormDTO channelFormDTO) {
        Server server = serverService.getServerByUUID(channelFormDTO.getServerId());
        Channel ch = new Channel(channelFormDTO.getChannelName(), channelFormDTO.getChannelType(), server);
        channelRepository.save(ch);
    }

    @GetMapping("/channel/getAll/{serverId}")
    public void getAllChannelFromServer(@PathVariable UUID serverId){
        List<Channel> chs = channelRepository.getAllChannelByServer(serverId).get();

        for (Channel ch : chs) {
            System.out.println(ch.getChannelName());
        }
    }

    
}
