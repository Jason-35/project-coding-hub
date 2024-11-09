type ChipProps = {
  bg_color: string,
  text_color: string,
  label: string,
  font_size: string,
  border_color: string,
  border_size: string,
  shape: string,
  margin: string
}

function Chip({bg_color, text_color, label, font_size, border_color, border_size, shape, margin} : ChipProps) {
  return (
    <div className={`${bg_color} ${text_color} ${font_size} ${border_color} ${border_size} ${margin} ${shape} text-center inline-block p-2`}>
      {label}
    </div>
  )
}

Chip.defaultProps = {
  bg_color: "bg-white",
  text_color: "text-black",
  font_size: "text-[16px]",
  border_color: "border-black",
  border_size: "border-2",
  shape: "rounded-lg",
  margin: "m-1"
}

export default Chip