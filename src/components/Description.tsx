type DescriptionProps = {
    text: string
}

export default function Description({text}: DescriptionProps) {
    return <article className="mt-16 mx-auto">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Описание</p>
        <p className="font-open-sans text-[20px] leading-[27px] flex flex-col gap-y-2 mt-8">
            {text}
        </p>
    </article>
}