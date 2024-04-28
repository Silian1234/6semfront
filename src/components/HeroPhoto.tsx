import ArrowIcon from '../assets/Vector.svg'
import Photo1 from '../assets/58489f94d6cea63cab1c83b99c292254.jpg'
import Photo2 from '../assets/RcnCZDA-539551911.jpg'
import Photo3 from '../assets/image-2012-01-24-11318012-70-membri-grupului-anonymous-timpul-unui-protest-23015897.jpg'
import { useState } from 'react'
import PageCircle from './PageCircle'

type HeroPhotoProps = {
    title: string
}

export default function HeroPhoto({ title }: HeroPhotoProps) {
    const [slideCount, setSlideCount] = useState(0)
    const maxSlides = 2

    const photos = [Photo1, Photo2, Photo3]

    return <>
        <article>
            <p className="font-open-sans font-bold text-[36px] leading-[49px]">{title}</p>
            <section className="flex mt-8">
                <div className='grid place-content-center w-[255px] h-[474px] bg-[rgba(0,_0,_0,_0.85)] cursor-pointer relative' onClick={() => setSlideCount(prev => prev > 0 ? prev - 1 : 0)}>
                    <img src={ArrowIcon} className='w-[16px] h-[38px]' />
                    <img src={photos[slideCount]} className='absolute object-left object-cover h-full -z-10' />
                </div>
                <div className='relative w-[712px] h-[474px] overflow-hidden'>
                    <div className='absolute flex transition-all duration-500 ease-out h-full w-fit' style={{ left: `-${100 * slideCount}%` }}>
                        <div className='w-[712px] h-[474px]'>
                            <img src={Photo1} className='object-cover' />
                        </div>
                        <div className='w-[712px] h-[474px]'>
                            <img src={Photo2} className='size-full object-cover' />
                        </div>
                        <div className='w-[712px] h-[474px]'>
                            <img src={Photo3} className='size-full object-cover' />
                        </div>
                    </div>
                </div>
                <div className='grid place-content-center w-[255px] h-[474px] bg-[rgba(0,_0,_0,_0.85)] cursor-pointer relative' onClick={() => setSlideCount(prev => prev < maxSlides ? prev + 1 : maxSlides)}>
                    <img src={ArrowIcon} className='w-[16px] h-[38px] rotate-180' />
                    <img src={photos[slideCount]} className='absolute object-right object-cover h-full -z-10' />
                </div>
            </section>
            <div className='flex gap-x-2 w-full justify-center mt-4'>
                <div onClick={() => setSlideCount(0)}><PageCircle selected={slideCount === 0} /></div>
                <div onClick={() => setSlideCount(1)}><PageCircle selected={slideCount === 1} /></div>
                <div onClick={() => setSlideCount(2)}><PageCircle selected={slideCount === 2} /></div>
            </div>
        </article>
    </>
}