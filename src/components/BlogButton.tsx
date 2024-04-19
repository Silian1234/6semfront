type BlogButtonProps = {
    selected?: boolean
    text: string
}

export default function BlogButton({ selected, text }: BlogButtonProps) {
    return <div className={`rounded-2xl h-[60px] flex justify-center items-center px-8 cursor-pointer shadow-dark ${selected ? 'bg-white' : 'bg-gray-4 text-gray-5'}`}>{text}</div>
}