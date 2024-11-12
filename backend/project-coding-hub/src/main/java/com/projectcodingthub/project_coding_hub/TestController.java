package com.projectcodingthub.project_coding_hub;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
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
