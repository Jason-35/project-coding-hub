type MemberCardProps = {
    name: string,
    image?: string
}

function MemberCard({name, image} : MemberCardProps) {
  return (
    <div className=" h-16 flex items-center p-2 hover:bg-blue-400 hover:cursor-pointer hover:rounded-e-lg">
        {/* <span className="aspect-square rounded-lg border-2 min-w-12 bg-white flex items-center justify-center mr-2">{name.charAt(0).toUpperCase()}</span> */}
        <img src={image} width={12} className="aspect-square rounded-lg border-2 min-w-12 bg-white flex items-center justify-center mr-2"  alt={name.charAt(0).toUpperCase()} />
        <span className="text-lg truncate">{name}</span>
    </div>
  )
}

export default MemberCard