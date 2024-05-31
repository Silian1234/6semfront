import ProfileCard from "./ProfileCard"
import React from "react"

type PersonnelProps = {
    personnel: { image: string, name: string, description: string }[]
}

export default function Personnel({personnel}: PersonnelProps) {
    return <article className="mt-16">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Тренерский состав</p>
        <section className="flex justify-between w-full flex-wrap mt-8">
            {personnel.map((person, index) => <React.Fragment key={index}><ProfileCard imageSrc={person.image} name={person.name} description={person.description}/></React.Fragment>)}
        </section>
    </article>
}