package com.projectcodingthub.project_coding_hub.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/server")
public class ServerController {

    @GetMapping("hello")
    public String hello() {
        return "hello";
    }
}
