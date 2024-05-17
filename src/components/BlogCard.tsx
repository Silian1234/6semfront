import Generosity from '../assets/white-man-giving-food-poor-homeless-african-children_503750-3236.jpg'
import { useNavigate } from 'react-router-dom'
import SmallButton from './SmallButton'

type BlogCardProps = {
    editing?: boolean
    title: string
    picture: string
    publish_date: string
    description: string
}

export default function BlogCard({editing, title, picture, publish_date, description} : BlogCardProps) {
    const navigate = useNavigate()

    return <section className="bg-white rounded-2xl flex gap-x-12 py-8 px-6 shadow-dark mt-8 cursor-pointer relative" onClick={() => navigate('/blog/post')}>
        <div className='w-[540px] h-[360px]'><img src={picture} className='w-[540px] h-[360px] object-cover rounded-2xl'/></div>
        <div className='flex flex-col font-inter'>
            <p className='font-medium text-[30px] leading-9'>{title}</p>
            <span className='font-light text-[25px] leading-8 mt-6'>{description}</span>
            <br />
            <span className='font-light text-[25px] leading-8 mt-6'>{publish_date}</span>
        </div>
        { editing ? <SmallButton variant='red' text='Удалить' className='bottom-4 right-8 absolute'/> : null}
    </section>
}