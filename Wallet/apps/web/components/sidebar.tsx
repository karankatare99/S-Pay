
export const Sidebar = ({svgs} : any) => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1 pl-8">
                <div className="flex flex-col gap-2.5 pt-8 text-xs">

                    {svgs.map((svg : any, index : string) => {
                        return (
                            <div className={`flex items-center gap-1.5 cursor-pointer text-purple-600} font-medium`} key={index} >
                                {svg}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}