package com.projectcodingthub.project_coding_hub.server.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.server.model.Server;

@Repository
public interface ServerRepository extends JpaRepository<Server, UUID>{
    
}
