export type Server = {
    id: string,
    img: string,
    name: string,
    tags: string[],
    status: boolean,
    description: string
}

export type ServerFormValue = {
    serverStatus: boolean,
    serverName: string,
    serverDescription: string,
    serverTags: string[],
    serverImg: string,
}