type ScheduleItemProps = {
    trainer: string
    group: string
    club: string
    address: string
}

export default function ScheduleItem({ trainer, group, club, address }: ScheduleItemProps) {
    return <div className="bg-green-1 rounded-lg flex flex-col w-[140px] h-[105px] font-inter text-[15px] leading-[22px] justify-center px-4">
        <span>{trainer}</span>
        <span className="font-light">{group}</span>
        <span className="font-light">{club}</span>
        <span className="font-light text-[10px]">{address}</span>
    </div>
}