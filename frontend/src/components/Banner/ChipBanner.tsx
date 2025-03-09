import Chip from "../../components/Chip"

function ChipBanner() {
    const genre: string[] = ["python", "java", "go", "javascript", "react", "vue", "angular", "rust", "ruby","c", "php", "postgres", "mongodb", "c#", "react", "springboot", "next.js", "c++", "Show More"]
    return (
        <div className="border-2 mt-36 text-center bg-orange-300 p-8 sm:flex sm:h-60 sm:justify-around sm:items-center sm:p-48">
            <div className="sm:w-1/2">
                <div className="text-3xl sm:text-4xl">
                        Find your perfect project!
                </div>
                <br />
                <div className="sm:text-2xl">
                    Many projects with many tech <br/>
                    Search for projects you want to work on!
                </div>
            </div>
            <br />
            <div className="sm:w-1/2">
                {genre.map((genre, index) => (
                    <Chip key={index} label={genre} border_size="border-none" padding="p-2" shape="rounded-sm"/>
                ))}
            </div>
        </div>
    )
}

export default ChipBanner