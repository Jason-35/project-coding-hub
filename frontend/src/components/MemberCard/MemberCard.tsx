type MemberCardProps = {
    name: string,
    image?: string
}

function MemberCard({name, image} : MemberCardProps) {
  return (
    <div className=" h-16 flex items-center p-2 hover:bg-blue-400 hover:cursor-pointer gap-4 hover:rounded-md">
        <img src={image} width={12} className="aspect-square min-w-12 flex items-center justify-center mr-2 bg-orange-400 rounded-md"  alt={name.charAt(0).toUpperCase()} />
        <span className="text-lg truncate">{name}</span>
    </div>
  )
}

export default MemberCard