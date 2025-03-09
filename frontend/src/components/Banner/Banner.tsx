
interface BannerProps {
    colored: boolean,
    img: string,
    imgPos: number,
    heading: string,
    content: string
}

function Banner({colored} : BannerProps) {
  return (
    <div className={`flex justify-around p-24 items-center`}>
           {/* <div className="text-[40px] leading-loose">
                Have Fun!
                <div className="text-[24px] leading-snug">
                    It's more fun coding with others
                    <br />
                    Work together to make something great!
                </div>
            </div>
            <div className="w-1/3">
                <img src={code_typing} alt="" />
            </div> */}
    </div>
  )
}

export default Banner