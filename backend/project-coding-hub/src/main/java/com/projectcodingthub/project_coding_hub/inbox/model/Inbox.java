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
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    @JsonIgnore
    private User owner;
    private InboxType type;

    public Inbox() {}

    public Inbox(boolean unread) {
        this.unread = unread;
    }

    public Integer getId() {
        return this.id;
    }

    public boolean getUnread(){
        return this.unread;
    }

    public InboxType getType() {
        return this.type;
    }

    public User getOwner() {
        return this.owner;
    }
}
