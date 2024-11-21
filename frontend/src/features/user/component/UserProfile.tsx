import kitty from "../../../assets/kitty.png"

function UserProfile() {
  return (
    <div className="rounded-lg aspect-square w-16 flex justify-center items-center bg-orange-500">
        {/* {img ? <span className="text-[28px] text-white">M</span> : <img src={img} alt="" />} */}
        <img src={kitty} alt="" />
    </div>
  )
}

export default UserProfile