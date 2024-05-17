import ArrowIcon from '../assets/Vector.svg'
import { useState } from 'react'
import PageCircle from './PageCircle'

type HeroPhotoProps = {
    title: string
    pictures: {image: string}[]
}

export default function HeroPhoto({ title, pictures }: HeroPhotoProps) {
    const [slideCount, setSlideCount] = useState(0)
    const maxSlides = pictures.length - 1

    return <>
        <article>
            <p className="font-open-sans font-bold text-[36px] leading-[49px]">{title}</p>
            <section className="flex mt-8">
                <div className='grid place-content-center w-[255px] h-[474px] bg-[rgba(0,_0,_0,_0.85)] cursor-pointer relative' onClick={() => setSlideCount(prev => prev > 0 ? prev - 1 : 0)}>
                    <img src={ArrowIcon} className='w-[16px] h-[38px]' />
                    <img src={pictures[slideCount].image} className='absolute object-left object-cover h-full -z-10' />
                </div>
                <div className='relative w-[712px] h-[474px] overflow-hidden'>
                    <div className='absolute flex transition-all duration-500 ease-out h-full w-fit' style={{ left: `-${100 * slideCount}%` }}>
                        {pictures.map((picture, index) => <div className='w-[712px] h-[474px]' key={index}>
                            <img src={picture.image} className='object-cover' />
                        </div>)}
                       
                    </div>
                </div>
                <div className='grid place-content-center w-[255px] h-[474px] bg-[rgba(0,_0,_0,_0.85)] cursor-pointer relative' onClick={() => setSlideCount(prev => prev < maxSlides ? prev + 1 : maxSlides)}>
                    <img src={ArrowIcon} className='w-[16px] h-[38px] rotate-180' />
                    <img src={pictures[slideCount].image} className='absolute object-right object-cover h-full -z-10' />
                </div>
            </section>
            <div className='flex gap-x-2 w-full justify-center mt-4'>
                {pictures.map((_picture, index) => <div onClick={() => setSlideCount(index)} key={index}><PageCircle selected={slideCount === index} /></div>)}
            </div>
        </article>
    </>
}