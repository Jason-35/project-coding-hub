package com.projectcodingthub.project_coding_hub.message.repository;

import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.message.model.Message;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    
}
