package com.projectcodingthub.project_coding_hub.channel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.projectcodingthub.project_coding_hub.channel.dto.ChannelDTO;
import com.projectcodingthub.project_coding_hub.channel.dto.ChannelFormDTO;
import com.projectcodingthub.project_coding_hub.channel.model.Channel;
import com.projectcodingthub.project_coding_hub.channel.repository.ChannelRepository;
import com.projectcodingthub.project_coding_hub.server.model.Server;
import com.projectcodingthub.project_coding_hub.server.service.ServerService;

@Controller
public class WsChannelController {

    private final ChannelRepository channelRepository;
    private final ServerService serverService;

    @Autowired
    private SimpMessageSendingOperations template;

    WsChannelController(ChannelRepository channelRepository, ServerService serverService){
        this.channelRepository = channelRepository;
        this.serverService = serverService;
    }

    @MessageMapping("/create/channel/{serverId}")
    public void createChannel(@DestinationVariable String serverId, @Payload ChannelFormDTO body) throws Exception {
        Server server = serverService.getServerByUUID(body.getServerId());
        Channel ch = new Channel(body.getChannelName(), body.getChannelType(), server);
        channelRepository.save(ch);

        ChannelDTO channelDTO = new ChannelDTO(ch.getId(), ch.getChannelName());
        
        template.convertAndSend("/topic/create/channel/" + serverId, channelDTO);
    }
}
