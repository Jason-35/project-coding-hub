import Sidebar from "../../../components/Sidebar"
import { Outlet, Navigate} from "react-router-dom"

function PrivateRoute() {
    let loggedIn = true;

  return (
    loggedIn ? (
        <div className="flex w-screen h-screen">
            <Sidebar/>
            <Outlet/>
        </div>
    ) : <Navigate to={'/login'} /> 
  )
}

export default PrivateRoute