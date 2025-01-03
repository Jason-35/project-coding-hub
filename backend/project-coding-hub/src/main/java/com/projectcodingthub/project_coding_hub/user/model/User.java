package com.projectcodingthub.project_coding_hub.user.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projectcodingthub.project_coding_hub.inbox.model.Inbox;
import com.projectcodingthub.project_coding_hub.server.model.Server;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    
    @Column(nullable = false)
    private String username;
    
    @Column(nullable = false)
    private String password;

    @Column(unique = true, length = 100, nullable = false)
    private String email;

    @OneToMany(mappedBy = "owner")
    private Set<Server> ownedServer = new HashSet<>();

    @OneToMany(mappedBy = "recipient")
    private Set<Inbox> recipient = new HashSet<>();

    @OneToMany(mappedBy = "sender")
    private Set<Inbox> sender = new HashSet<>();

    @SuppressWarnings("unused")
    private User(){}

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
        
    public Integer getId() {
        return this.id;
    }

    public Set<Server> getOwnedServer() {
        return this.ownedServer;
    }
        
    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

}

