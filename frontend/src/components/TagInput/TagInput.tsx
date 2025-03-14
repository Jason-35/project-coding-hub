import { useRef } from "react"
import { removeValue } from "../../features/server/util/Util"
import Chip from "../Chip/Chip"

interface TagInputProps {
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}
function TagInput({tags, setTags}: TagInputProps) {
    const tagInputRef = useRef<HTMLInputElement>(null)
    
    const removeChip = (tag: string) => {
        setTags(removeValue(tags, tag))
    }

    const handleTagInput = (e: React.KeyboardEvent) => {
        let event = (e.target as HTMLInputElement)
        
        if (e.key === 'Enter') {
            if(tags.length <= 20 && !tags.includes(event.value)) {
                setTags([...tags, event.value])
            }

            if(tagInputRef.current) {
                tagInputRef.current.value = ""
            }
        }  
    }

    return (
        <div className="w-4/5 flex flex-col gap-2">
            <div className="text-[20px]">Tags</div>
            <div className="flex flex-wrap max-h-52 overflow-scroll scrollbar-hidden">
                {tags && tags.map((tag, index) => (
                    <div 
                        key={index} 
                        onClick={() => removeChip(tag)}
                        className="hover:cursor-pointer">
                        <Chip label={tag} padding="p-1" border_size="border-[1px]"/>
                    </div>
                ))}
            </div>
            <div>
                <input ref={tagInputRef} 
                    type="text" 
                    placeholder="Add a tag" 
                    onKeyDown={handleTagInput}
                    maxLength={20}
                    className="w-full p-2 rounded-sm border-[1px] border-black" />
            </div>
            <div className="italic text-[12px]">
                20 max tags
            </div>
        </div>
    )
}

export default TagInput