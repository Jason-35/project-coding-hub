package com.projectcodingthub.project_coding_hub.inbox.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface InboxRepository extends JpaRepository<Inbox, Integer>{
    
    @Query("SELECT i FROM Inbox i WHERE i.recipient.id = :userId")
    Optional<List<Inbox>> getAllInboxByRecipient(Integer userId);
}
