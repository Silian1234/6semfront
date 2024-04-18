type WeekdayProps = {
    date: string
    day: string
    first?: boolean
    last?: boolean
    selected?: boolean
}

export default function Weekday({ date, day, selected, first, last }: WeekdayProps) {
    return <div className={`flex justify-center items-center border-gray-1 border-x-[1px] ${first ? 'border-l-white' : last ? 'border-r-white' : ''}`}>
        <div className={`flex flex-col justify-center items-center font-inter text-[16px] leading-[19px] font-medium ${selected ? 'text-black' : 'text-gray-1'}`}>
            <span>{date}</span>
            <div className="relative">
                {day}
                {selected ? <div className="w-[107px] h-[5px] bg-orange-1 absolute -translate-x-1/2 left-1/2 rounded-md"></div> : null}
            </div>
        </div>
    </div>
}