import { createContext, useEffect, useState } from "react";
import { useWebSocket } from "./Ws";
import { InboxCardType, InboxValue } from "../types/InboxTypes";
import { getUserInfo } from "../auth/util/util";
import { getUserMail } from "../httpRequest/UserRequest";


let inboxDefault = {
    mails: [],
    unread: 0,
    showInbox: false,
    setShowInbox: () => {}
}

export const InboxContext = createContext<InboxValue>(inboxDefault);

export const InboxProvider = ({children}: {children: React.ReactNode}) => {
    
    const webSocketClient = useWebSocket()
    const [mails, setMails] = useState<InboxCardType[]>([])
    const [unread, setUnread] = useState<number>(0)
    const [showInbox, setShowInbox] = useState<boolean>(false)

    const fetchUserMail = async() => {
        const res = await getUserMail()
        setMails(res.data)
    }

    useEffect(() => {
        fetchUserMail()
    }, [])

    useEffect(() => {
        const userId = getUserInfo()?.id
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/notification/${userId}`, (message) => {
                console.log(message.body)
                let newMail: InboxCardType = JSON.parse(message.body) 
                setMails((prev) => [...prev, newMail]);
                setUnread((prev) => prev += 1)
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/notification/${userId}`);
    }, [webSocketClient])
    
    return (
        <InboxContext.Provider value={{mails, unread, showInbox, setShowInbox}}>
            {children}
        </InboxContext.Provider>
    )
}