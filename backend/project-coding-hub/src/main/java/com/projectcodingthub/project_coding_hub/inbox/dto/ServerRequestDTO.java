package com.projectcodingthub.project_coding_hub.inbox.dto;

import java.util.UUID;

public class ServerRequestDTO {
    private Integer senderId;
    private String sender;
    private String project;
    private UUID projectId;
    private String date;

    public ServerRequestDTO(String sender, String project, String date, Integer senderId, UUID projectId) {
        this.sender = sender;
        this.project = project;
        this.date = date;
        this.senderId = senderId;
        this.projectId = projectId;
    }

    // Getters and Setters
    public String getSender() {
        return sender;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getDate() {
        return date;
    }

    public Integer getSenderId() {
        return this.senderId;
    }

    public UUID getProjectId() {
        return this.projectId;
    }

    // toString method for displaying the object content
    @Override
    public String toString() {
        return "ProjectDetails{" +
                "sender='" + sender + '\'' +
                ", project='" + project + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
