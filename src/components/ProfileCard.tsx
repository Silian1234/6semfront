import React from "react"

type ProfileProps = {
    imageSrc: string
    name: string
    description: string
}

export default function ProfileCard({ imageSrc, name, description }: ProfileProps) {
    return <section className="w-[630px] h-[375px] bg-white rounded-2xl flex px-2 justify-center gap-x-12 py-6 shadow-dark">
        <div className="w-[200px] h-[260px]">
            <img src={imageSrc} className="h-full w-full object-cover object-center rounded-xl" />
        </div>
        <div className="flex flex-col">
            <p className="font-inter text-[20px] leading-[24px] font-medium">{name}</p>
            <p className="font-inter text-[20px] leading-[32px] font-light mt-4">
                {description}
            </p>
        </div>
    </section>
}