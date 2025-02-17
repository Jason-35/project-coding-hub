package com.projectcodingthub.project_coding_hub.channel.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.channel.model.Channel;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ChannelRepository extends JpaRepository<Channel, Integer>{
    
    @Query("SELECT ch FROM Channel ch WHERE ch.server.id = :serverId")
    Optional<List<Channel>> findAllByServerId(@Param("serverId") UUID serverId);
}
