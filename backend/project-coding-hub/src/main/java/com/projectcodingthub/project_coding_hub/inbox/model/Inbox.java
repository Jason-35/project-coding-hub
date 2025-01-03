package com.projectcodingthub.project_coding_hub.inbox.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projectcodingthub.project_coding_hub.user.model.User;

import jakarta.persistence.CascadeType;
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

    public Inbox() {}

    public Inbox(User sender, User recipient, boolean unread) {
        this.unread = unread;
        this.sender = sender;
        this.recipient = recipient;
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
}
