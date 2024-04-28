import ArrowIcon from '../assets/solar_arrow-down-outline.svg'

type SmallButtonProps = {
    className?: React.ComponentProps<'div'>['className']
}

export default function NavButton({ className }: SmallButtonProps) {
    return <div className={`font-inter font-light text-[12px] leading-[14px] py-1 px-3 border-[1px] rounded-xl flex justify-center items-center select-none cursor-pointer w-fit gap-x-1 ${className} border-gray-6`}>
        <div className='size-5'><img src={ArrowIcon} className='size-5' /></div>вернуться
    </div>
}