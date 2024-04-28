type SmallButtonProps = {
    className?: React.ComponentProps<'div'>['className']
    variant: 'neutral' | 'red' | 'green'
    text: string
}

export default function SmallButton({ className, variant, text }: SmallButtonProps) {
    return <div className={`${className} font-inter font-light text-[12px] leading-[14px] py-1 px-3 border-[1px] rounded-xl flex justify-center items-center select-none cursor-pointer w-fit ${variant === 'neutral' ? 'border-gray-6' : variant === 'red' ? 'border-red-2' : variant === 'green' ? 'border-green-3' : '' }`}>
        {text}
    </div>
}