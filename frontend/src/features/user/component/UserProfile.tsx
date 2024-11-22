import kitty from "../../../assets/kitty.png"

function UserProfile() {
    let profileImg = false
  return (
    <div className="rounded-lg aspect-square w-16 flex justify-center items-center bg-orange-500">
        {profileImg ? <img src={kitty} alt="" /> : <span className="text-[28px] text-white">M</span>}
    </div>
  )
}

export default UserProfile