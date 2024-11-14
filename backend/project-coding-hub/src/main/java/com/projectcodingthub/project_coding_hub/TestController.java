package com.projectcodingthub.project_coding_hub;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.service.JwtService;
import com.projectcodingthub.project_coding_hub.user.model.User;

@RestController
@CrossOrigin
public class TestController {

    User testUser = new User("root", "123");
    JwtService jwt = new JwtService();

    @PostMapping("/hello")
    public String hello() {
        return "Hello this is the content";
    }

    @GetMapping("/world")
    public String world() {
        return "World";
    }

    @GetMapping("/protect")
    public String protect() {
        return "secret";
    }
}
