import { useEffect, useState } from "react";
import PositionBlock from "../../../components/PositionBlock";
import Sidebar from "../../../components/Sidebar"
import { Outlet, Navigate} from "react-router-dom"
import { isJwtPresent, isUserPresent } from "../util/util";

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
        <div className="flex w-screen h-screen">
            <Sidebar/>
            <PositionBlock />
            <Outlet/>
        </div>
    ) : <Navigate to={'/login'} />) : <></> 
  
    )
}

export default PrivateRoute