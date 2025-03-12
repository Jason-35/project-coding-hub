import { useEffect, useState } from "react";
import PositionBlock from "../../../components/PositionBlock";
import Sidebar from "../../../components/Sidebar"
import { Outlet, Navigate} from "react-router-dom"
import { isJwtPresent, isUserPresent } from "../util/util";
import { WebSocketContextProvider } from "../../ws/Ws";
import { InboxContext, InboxProvider } from "../../../context/InboxContext";

function PrivateRoute() {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)
        setIsLogin((isJwtPresent() && isUserPresent()))
        setIsLoading(false)
    })

  return (

    !isLoading ? 
    (isLogin ? (
        <WebSocketContextProvider>
            <div className="flex w-screen h-screen">
                <InboxProvider>
                    <Sidebar/>
                </InboxProvider>
                <PositionBlock />
                <Outlet/>
            </div>
        </WebSocketContextProvider>
    ) : <Navigate to={'/login'} />) : <></> 
  
    )
}

export default PrivateRoute