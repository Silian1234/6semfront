import Photo from '../assets/16448465 1.png'
import SmallButton from './SmallButton'
import { useNavigate } from 'react-router-dom'

type GymCardProps = {
    editing: boolean
}

export default function GymCard({ editing }: GymCardProps) {
    const navigate = useNavigate()

    return <>
        <section className="flex bg-white size-[638px] rounded-3xl flex-col shadow-dark cursor-pointer" onClick={() => navigate('/gym')}>
            <div className='w-full h-1/2 rounded-3xl'><img src={Photo} className='size-full object-cover rounded-3xl' /></div>
            <div className='relative h-1/2'>
                <div className='w-full h-1/2 flex flex-col px-9 relative'>
                    <h2 className='font-medium text-[25px] leading-[30px] font-inter mt-4'>Fitnesbro</h2>
                    <p className='font-inter text-[20px] leading-[32px] mt-14'>
                        <span>Телефон: +7 900 290 28 37</span>
                        <br />
                        <span>Адрес: ул. Ленина 18</span>
                    </p>
                </div>
                {editing ? <div className='absolute bottom-6 right-9 gap-5 flex'>
                    <SmallButton text='Редактировать' variant='neutral' />
                    <SmallButton text='Удалить' variant='red' />
                </div> : null}
            </div>
        </section>
    </>
}