package com.projectcodingthub.project_coding_hub.message.repository;

import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.message.model.Message;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
@Transactional
public interface MessageRepository extends JpaRepository<Message, Integer> {
    
    @Query("SELECT m FROM Message m WHERE m.channel.id = :channelId")
    Optional<List<Message>> findAllMessagesByChannelId(UUID channelId);

}
