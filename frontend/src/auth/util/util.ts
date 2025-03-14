type TokenInfo = {
    token: string
}

type UserInfo = {
    username: string
    id: number;
}

export const isUserPresent = () => {
    const userInfoString: string | null = localStorage.getItem('userInfo')
    const userInfo: UserInfo | null = userInfoString ? JSON.parse(userInfoString) : null; 
    if (userInfo && userInfo.username.length > 0 && userInfo.id) {
        return true
    } 

    return false;
}

export const isJwtPresent = (): boolean => {
    const tokenInfoString: string | null = localStorage.getItem('tokenInfo')
    const tokenInfo: TokenInfo | null = tokenInfoString ? JSON.parse(tokenInfoString) : null; 
    if (tokenInfo && tokenInfo.token.length > 0) {
        return true
    } 

    return false;
}

export const getUserInfo = (): UserInfo | null => {
    const userInfoString: string | null = localStorage.getItem('userInfo')
    const userInfo: UserInfo | null = userInfoString ? JSON.parse(userInfoString) : null; 
    if (userInfo && userInfo.username.length > 0) {
        return userInfo
    } else {
        return null;
    }
}

export const getJwtToken = (): string | null => {
    const tokenInfoString: string | null = localStorage.getItem('tokenInfo')
    const tokenInfo: TokenInfo | null = tokenInfoString ? JSON.parse(tokenInfoString) : null; 
    if (tokenInfo && tokenInfo.token.length > 0) {
        return tokenInfo.token;
    } else {
        return null;
    }

}