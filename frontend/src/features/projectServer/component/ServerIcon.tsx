
import { useNavigate } from "react-router-dom"

type ServerIconProps = {
    serverName: string,
    serverImg?: string,
    serverUrl: string
}

function ServerIcon({ serverName, serverImg, serverUrl }: ServerIconProps) {
    const navigate = useNavigate()

    const handleServerNav = () => {
        navigate(serverUrl)
    }
    return (
        <>
        {serverImg ? 
            <img className="rounded-lg w-16 aspect-square" src={serverImg} onClick={handleServerNav} /> 
            : 
            <div className='aspect-square rounded-lg flex justify-center items-center bg-blue-500 w-16' onClick={handleServerNav}>
                <span className='text-[28px] text-white'>{serverName.charAt(0)}</span>
            </div>
        }
        </>
    )
}

export default ServerIcon