package com.projectcodingthub.project_coding_hub.channel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectcodingthub.project_coding_hub.channel.model.Channel;

public interface ChannelRepository extends JpaRepository<Channel, Integer>{
    
}
