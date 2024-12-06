package com.projectcodingthub.project_coding_hub.server.model;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projectcodingthub.project_coding_hub.user.model.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "servers")
public class Server {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(nullable = false)
    private UUID id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    @JsonIgnore
    private User owner;

    private String ownerName;

    private String name;
    
    private String description;

    @Lob
    private String img;

    private boolean status;

    private String[] tags;

    @SuppressWarnings("unused")
    private Server() {}

    public Server(
        User owner,
        String name,
        String description,
        String img,
        boolean status,
        String[] tags
        ) {
        this.owner = owner;
        this.name = name;
        this.description = description;
        this.img = img;
        this.status = status;
        this.tags = tags;
        this.ownerName = owner.getUsername();
    }

    public User getOwner() {
        return this.owner;
    }

    public String getOwnerName() {
        return this.ownerName;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public String getImg() {
       return this.img; 
    }

    public boolean getStatus() {
        return this.status;
    }

    public String[] getTags() {
        return this.tags;
    }
    
}
