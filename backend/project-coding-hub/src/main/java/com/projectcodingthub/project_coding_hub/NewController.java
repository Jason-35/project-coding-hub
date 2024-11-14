package com.projectcodingthub.project_coding_hub;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.TestFolder.LoginResponse;
import com.projectcodingthub.TestFolder.LoginUserDTO;
import com.projectcodingthub.TestFolder.RegisterUserDTO;
import com.projectcodingthub.project_coding_hub.service.AuthService;
import com.projectcodingthub.project_coding_hub.service.JwtService;
import com.projectcodingthub.project_coding_hub.user.model.User;

@RestController
@CrossOrigin
public class NewController {

    private final JwtService jwt;
    private final AuthService authService;

    public NewController(JwtService jwt, AuthService authService){
        this.jwt = jwt;
        this.authService = authService;
    }

    @GetMapping("/world")
    public String world() {
        return "world";
    }

    @PostMapping("/auth/free")
    public String bow(){
        return "Bow down";
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDTO registerUserDto) {
        User registeredUser = authService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDTO loginUserDto) {
        User authenticatedUser = authService.authenticate(loginUserDto);

        String jwtToken = jwt.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse(jwtToken, jwt.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }
}
