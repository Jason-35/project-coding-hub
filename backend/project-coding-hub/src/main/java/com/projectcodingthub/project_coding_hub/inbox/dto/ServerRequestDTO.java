package com.projectcodingthub.project_coding_hub.inbox.dto;

public class ServerRequestDTO {
    private String sender;
    private String project;
    private String date;

    public ServerRequestDTO(String sender, String project, String date) {
        this.sender = sender;
        this.project = project;
        this.date = date;
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
