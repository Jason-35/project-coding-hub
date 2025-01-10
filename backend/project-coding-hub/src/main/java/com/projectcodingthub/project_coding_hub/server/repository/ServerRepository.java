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
import com.projectcodingthub.project_coding_hub.user.model.User;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface ServerRepository extends JpaRepository<Server, UUID>{
    Optional<List<Server>> findAllByOwner_Id(Integer id);

    @Query("SELECT s.owner.id FROM Server s WHERE s.id = :id")
    Optional<Integer> findOwnerIdByServerId(UUID id);

    @Query("SELECT s.owner FROM Server s WHERE s.id = :id")
    Optional<User> findOwnerByServerId(UUID id);

    @Query("SELECT s FROM Server s WHERE s.id = :id")
    Optional<Server> findServerByServerId(UUID id);

      // JPQL query to find students by course ID
    //   @Query("SELECT s FROM Student s JOIN s.courses c WHERE c.id = :courseId")
    //   List<Student> findStudentsByCourseId(@Param("courseId") Long courseId);

    @Query("SELECT s FROM Server s JOIN s.members m WHERE m.id = :id")
    Optional<List<Server>> findMemberOfServers(Integer id);
}
