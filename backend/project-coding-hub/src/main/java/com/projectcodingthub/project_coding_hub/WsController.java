package com.projectcodingthub.project_coding_hub;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WsController {
    @MessageMapping("/hello")
    @SendTo("/topic/greeting")
    public String greeting(String message) throws Exception {
        System.out.println("message " + message);
        return "I have recieved the message " + message;
    }

    @GetMapping("/yes")
    public String works(){
        return "Yessir";
    }
}
