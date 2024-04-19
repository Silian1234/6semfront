import React from "react"

type TrainerProps = {
    imageSrc: string
    name: string
    description: string[]
    phone: string
    email: string
    gyms: string[]
}

export default function TrainerCardBig({ imageSrc, name, description, phone, email, gyms }: TrainerProps) {
    return <>
        <p className="font-open-sans font-bold text-[36px] leading-[49px]">Тренерская карта</p>
        <section className="mt-8 bg-white flex p-8 rounded-2xl gap-x-24 shadow-dark">
            <div className='w-[470px] h-[650px]'><img src={imageSrc} className='object-cover w-full h-full rounded-2xl' /></div>
            <div className='flex font-inter flex-col'>
                <p className='font-medium text-[40px] leading-[48px]'>{name}</p>
                <span className='font-light text-[30px] leading-[32px] mt-16'>{description.map((item, index) => <React.Fragment key={index}><span>{item}</span><br /></React.Fragment>)}</span>
                <span className='font-light text-[30px] leading-[32px] mt-20'>Телефон: {phone}</span>
                <span className='font-light text-[30px] leading-[32px] mt-4'>Электронная почта:<br />{email}</span>
                <span className='font-light text-[30px] leading-[32px] mt-4'>Залы:<br />{gyms.map((item, index) => <React.Fragment key={index}><span>{item}</span>{index == gyms.length - 1 ? '' : ';'}<br /></React.Fragment>)}</span>
            </div>
        </section>
    </>

}