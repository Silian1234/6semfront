import Generosity from '../assets/white-man-giving-food-poor-homeless-african-children_503750-3236.jpg'
import { useNavigate } from 'react-router-dom'
import SmallButton from './SmallButton'

type BlogCardProps = {
    editing?: boolean
}

export default function BlogCard({editing} : BlogCardProps) {
    const navigate = useNavigate()

    return <section className="bg-white rounded-2xl flex gap-x-12 py-8 px-6 shadow-dark mt-8 cursor-pointer relative" onClick={() => navigate('/blog/post')}>
        <div className='w-[540px] h-[360px]'><img src={Generosity} className='w-[540px] h-[360px] object-cover rounded-2xl'/></div>
        <div className='flex flex-col font-inter'>
            <p className='font-medium text-[30px] leading-9'>День невиданной щедрости</p>
            <span className='font-light text-[25px] leading-8 mt-6'>С 13 по 15 апреля 2024</span>
        </div>
        { editing ? <SmallButton variant='red' text='Удалить' className='bottom-4 right-8 absolute'/> : null}
    </section>
}