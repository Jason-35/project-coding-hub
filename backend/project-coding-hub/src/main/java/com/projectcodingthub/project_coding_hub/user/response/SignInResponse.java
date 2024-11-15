package com.projectcodingthub.project_coding_hub.user.response;

public class SignInResponse {
    private TokenInfo tokenInfo;
    private UserInfo userInfo;

    public SignInResponse(UserInfo userInfo, TokenInfo tokenInfo) {
        this.userInfo = userInfo;
        this.tokenInfo = tokenInfo;
    }

    public TokenInfo getTokenInfo() {
        return this.tokenInfo;
    }

    public UserInfo getUserInfo() {
        return this.userInfo;
    }
}
