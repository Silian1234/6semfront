import React from "react"

type TrainerProps = {
    imageSrc: string
    name: string
    description: string[]
    contacts: string[]
}

export default function TrainerCardBig({ imageSrc, name, description, contacts }: TrainerProps) {
    return <>
        <p className="font-open-sans font-bold text-[36px] leading-[49px]">Тренерская карта</p>
        <section className="mt-8 bg-white flex p-4">
            <div className='w-[470px] h-[653px]'><img src={imageSrc} className='object-fill' /></div>
            <div className='flex font-inter flex-col'>
                <p className='font-medium text-[40px] leading-[48px]'>{name}</p>
                <span className='font-light text-[30px] leading-[32px]'>{description.map((item, index) => <React.Fragment key={index}><span>{item}</span><br /></React.Fragment>)}</span>
                <span className='font-light text-[30px] leading-[32px]'>{contacts.map((item, index) => <React.Fragment key={index}><span>{item}</span><br /></React.Fragment>)}</span>
            </div>
        </section>
    </>

}