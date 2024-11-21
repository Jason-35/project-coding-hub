type ChipProps = {
  bg_color?: string,
  text_color?: string,
  label: string,
  font_size?: string,
  border_color?: string,
  border_size?: string,
  shape?: string,
  margin?: string,
  padding?: string
}

function Chip({
        bg_color = "bg-white",
        text_color = "text-black",
        label,
        font_size = "text-[16px]",
        border_color = "border-black",
        border_size = "border-2",
        shape = "rounded-lg",
        margin = "m-1",
        padding = "p-4"
    } : ChipProps) {
  return (
    <div className={`${bg_color} ${text_color} ${font_size} ${border_color} ${border_size} ${margin} ${shape} text-center inline-block ${padding}`}>
      {label}
    </div>
  )
}


export default Chip