package com.projectcodingthub.project_coding_hub.inbox.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projectcodingthub.project_coding_hub.user.model.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Inbox {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    private boolean unread;
    @ManyToOne()
    @JoinColumn(name = "recipient", referencedColumnName = "id")
    @JsonIgnore
    private User recipient;

    @ManyToOne()
    @JoinColumn(name = "sender", referencedColumnName = "id")
    @JsonIgnore
    private User sender;


    private String recipientName;

    private String senderName;

    private String serverName;

    private UUID serverUUID;

    public Inbox() {}

    public Inbox(User sender, User recipient, UUID serverUUID, String serverName, boolean unread) {
        this.unread = unread;
        this.sender = sender;
        this.recipient = recipient;
        this.senderName = sender.getUsername();
        this.recipientName = recipient.getUsername();
        this.serverName = serverName;
        this.serverUUID = serverUUID;
    }

    public Integer getId() {
        return this.id;
    }

    public boolean getUnread(){
        return this.unread;
    }

    public User getRecipient() {
        return this.recipient;
    }

    public User getSender() {
        return this.sender;
    }

    public String getRecipientName() {
        return this.recipientName;
    }

    public String getSenderName() {
        return this.senderName;
    }

    public UUID getServerUUID() {
        return this.serverUUID;
    }

    public String getServerName() {
        return this.serverName;
    }

    
}
