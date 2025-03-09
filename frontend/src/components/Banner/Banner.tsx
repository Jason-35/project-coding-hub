interface BannerProps {
    colored: boolean,
    img: string,
    reverse: boolean,
    heading: string,
    content: string
}

function Banner({colored, img, reverse, heading, content} : BannerProps) {
  return (
    <div className={`text-center p-8 sm:flex sm:${reverse ? "flex-row-reverse" : "flex-row"} sm:justify-around sm:items-center ${colored ? "bg-orange-300" : "bg-white" }`}>
        <div className="sm:w-1/2 p-4">
            <div className="text-3xl sm:text-4xl">
                {heading}
            </div>
            <br />
            <div className="sm:text-2xl whitespace-pre-wrap">
                {content}
            </div>
        </div>
        <br/>
        <div className="sm:w-1/2">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner