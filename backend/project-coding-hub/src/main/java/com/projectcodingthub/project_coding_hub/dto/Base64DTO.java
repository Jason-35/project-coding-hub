package com.projectcodingthub.project_coding_hub.dto;

public class Base64DTO {
    private String base64content;

    public Base64DTO(){}

    public Base64DTO(String base64content) {
        this.base64content = base64content;
    }

    public String getBase64content() {
        return this.base64content;
    }
}
