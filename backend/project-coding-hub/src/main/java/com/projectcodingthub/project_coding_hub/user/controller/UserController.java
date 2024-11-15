package com.projectcodingthub.project_coding_hub.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectcodingthub.project_coding_hub.Jwt.service.JwtService;
import com.projectcodingthub.project_coding_hub.user.dto.LoginUserDTO;
import com.projectcodingthub.project_coding_hub.user.dto.RegisterUserDTO;
import com.projectcodingthub.project_coding_hub.user.model.User;
import com.projectcodingthub.project_coding_hub.user.response.SignInResponse;
import com.projectcodingthub.project_coding_hub.user.response.TokenInfo;
import com.projectcodingthub.project_coding_hub.user.response.UserInfo;
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
    public ResponseEntity<SignInResponse> register(@RequestBody RegisterUserDTO registerUserDto) {
        User registeredUser = authService.signup(registerUserDto);
        String jwtToken = jwt.generateToken(registeredUser);

        TokenInfo tokenInfo = new TokenInfo(jwtToken, jwt.getExpirationTime());
        UserInfo userInfo = new UserInfo(registerUserDto.getUsername());
        SignInResponse signInResponse = new SignInResponse(userInfo, tokenInfo);
        return ResponseEntity.ok(signInResponse);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<SignInResponse> authenticate(@RequestBody LoginUserDTO loginUserDto) {
        User authenticatedUser = authService.authenticate(loginUserDto);
        String jwtToken = jwt.generateToken(authenticatedUser);
        
        TokenInfo tokenInfo = new TokenInfo(jwtToken, jwt.getExpirationTime());
        UserInfo userInfo = new UserInfo(loginUserDto.getUsername());
        SignInResponse signInResponse = new SignInResponse(userInfo, tokenInfo);
        return ResponseEntity.ok(signInResponse);
    }
}
