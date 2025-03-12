export type InboxCardType = {
    senderId: number,
    sender: string,
    project: string,
    projectId: string,
    date: string,
    mailType: string,
    senderName: string,
    serverName: string,
    response: string
}

export type InboxValue = {
    mails: InboxCardType[],
    unread: number,
    showInbox: boolean,
    setShowInbox: React.Dispatch<React.SetStateAction<boolean>>
}