import MemberCard from "./MemberCard"
import kitty from "../../../assets/kitty.png"
import jk from "../../../assets/jumpking.jpg"
function Members() {
  return (
    <div className="w-1/6 pr-2">
        <MemberCard name="david" image={kitty}/>
        <MemberCard name="john" image={jk}/>
        <MemberCard name="mary"/>
        <MemberCard name="gwen"/>
        <MemberCard name="verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrry"/>
    </div>
  )
}

export default Members