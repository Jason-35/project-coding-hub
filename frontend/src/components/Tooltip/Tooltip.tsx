function Tooltip({children, content} : {children: React.ReactNode, content: string}) {
  
    return (
        <div data-tooltip={content} className={`before:absolute before:translate-x-[4.55rem] before:translate-y-6 
                        before:border-8 before:border-transparent before:border-r-blue-400 
                        before:scale-0 before:hover:scale-100 
                        after:content-[attr(data-tooltip)] after:absolute after:w-fit after:h-fit 
                        after:bg-blue-400 after:translate-x-[5.58rem] after:translate-y-[-3.35rem] 
                        after:scale-0 after:hover:scale-100 after:text-center after:p-2 after:rounded-md 
                        after:text-[16px] after:text-black hover:cursor-pointer
                        before:transition before:duration-150 before:ease-in before:origin-right 
                        after:transition after:duration-150 after:ease-in after:origin-left after:whitespace-nowrap`}>
            {children}
        </div>
    )
}

export default Tooltip