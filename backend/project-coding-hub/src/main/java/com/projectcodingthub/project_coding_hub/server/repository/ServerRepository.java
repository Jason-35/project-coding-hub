package com.projectcodingthub.project_coding_hub.server.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projectcodingthub.project_coding_hub.server.model.Server;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ServerRepository extends JpaRepository<Server, UUID>{

    @Query("SELECT sr FROM Server sr WHERE sr.name = :name")
    Optional<List<Server>> findAllServerNameAfk(@Param("name") String name);

    Optional<Server> findByName(@Param("name") String name);

    Optional<List<Server>> findAllByOwner_Id(Integer id);

    
    

}
