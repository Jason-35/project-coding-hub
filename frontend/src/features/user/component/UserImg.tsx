import kitty from "../../../assets/kitty.png"
import { getUserInfo } from "../../auth/util/util"

function UserImg() {
    let profileImg = false
    return (
        <div className="rounded-lg aspect-square w-16 flex justify-center items-center bg-orange-500 p-2">
            {profileImg ? <img src={kitty} alt="" /> : <span className="text-[28px] text-white">{getUserInfo()?.username.charAt(0)}</span>}
        </div>
  )
}

export default UserImg