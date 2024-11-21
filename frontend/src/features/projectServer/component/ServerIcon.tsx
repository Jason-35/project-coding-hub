type ServerIconProps = {
    serverName: string,
    serverImg?: string
}


function ServerIcon({ serverName, serverImg }: ServerIconProps) {
    console.log(serverImg)
  return (
    <div className='aspect-square rounded-lg flex justify-center items-center bg-blue-500 w-16'>
        {serverImg ? <img src={serverImg} /> : <span className='text-[28px] text-white'>{serverName.charAt(0)}</span>}
        
    </div>
  )
}

export default ServerIcon