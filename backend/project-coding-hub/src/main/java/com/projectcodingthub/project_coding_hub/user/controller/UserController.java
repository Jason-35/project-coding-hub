package com.projectcodingthub.project_coding_hub.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.Jwt.service.JwtService;
import com.projectcodingthub.project_coding_hub.user.dto.TokenResponse;
import com.projectcodingthub.project_coding_hub.user.dto.LoginUserDTO;
import com.projectcodingthub.project_coding_hub.user.dto.RegisterUserDTO;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.service.UserService;

@RestController
@CrossOrigin
public class UserController {

    private final JwtService jwt;
    private final UserService authService;

    public UserController(JwtService jwt, UserService authService){
        this.jwt = jwt;
        this.authService = authService;
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<TokenResponse> register(@RequestBody RegisterUserDTO registerUserDto) {
        User registeredUser = authService.signup(registerUserDto);
        String jwtToken = jwt.generateToken(registeredUser);
        TokenResponse tokenResponse = new TokenResponse(jwtToken, jwt.getExpirationTime());
        return ResponseEntity.ok(tokenResponse);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<TokenResponse> authenticate(@RequestBody LoginUserDTO loginUserDto) {
        User authenticatedUser = authService.authenticate(loginUserDto);
        String jwtToken = jwt.generateToken(authenticatedUser);
        TokenResponse tokenResponse = new TokenResponse(jwtToken, jwt.getExpirationTime());
        return ResponseEntity.ok(tokenResponse);
    }
}
