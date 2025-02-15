package com.projectcodingthub.project_coding_hub.channel.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projectcodingthub.project_coding_hub.channel.model.Channel;

public interface ChannelRepository extends JpaRepository<Channel, Integer>{
    
    @Query("SELECT ch FROM Channel ch WHERE ch.server_id := serverId")
    Optional<List<Channel>> getAllChannelByServer(UUID serverId);
}
