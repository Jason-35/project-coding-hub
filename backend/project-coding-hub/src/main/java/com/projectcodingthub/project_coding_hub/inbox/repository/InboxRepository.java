package com.projectcodingthub.project_coding_hub.inbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface InboxRepository extends JpaRepository<Inbox, Integer>{
    
}
