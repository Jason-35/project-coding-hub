package com.projectcodingthub.project_coding_hub.channel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.projectcodingthub.project_coding_hub.server.model.Server;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private String channelName;

    @Column(nullable = false)
    private String channelType;
    
    @ManyToOne()
    @JoinColumn(name = "server_id", referencedColumnName = "id")
    @JsonIgnore
    private Server server;

    public Channel(String channelName, String channelType, Server server){
        this.channelName = channelName;
        this.channelType = channelType;
        this.server = server;
    }


    public Integer getId(){
        return this.id;
    }

    public String getChannelName(){
        return this.channelName;
    }

    public String getChannelType(){
        return this.channelType;
    }

    public Server getServer() {
        return this.server;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public void setChannelName(String channelName){
        this.channelName = channelName;
    }

    public void setChannelType(String channelType){
        this.channelType = channelType;
    }

    public void setServer(Server server) {
        this.server = server;
    }
    
}
