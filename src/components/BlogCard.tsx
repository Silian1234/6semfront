import { useNavigate } from 'react-router-dom'
import SmallButton from './SmallButton'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'
import { useState } from 'react'

type BlogCardProps = {
    editing?: boolean
    title: string
    picture: string
    publish_date: string
    description: string
    id: string
}

export default function BlogCard({ editing, title, picture, publish_date, description, id }: BlogCardProps) {
    const navigate = useNavigate()
    const { state } = useAuthContext()
    const [isHidden, setIsHidden] = useState(false)

    const handleDelete = async () => {
        if (!state.user) return
        const res = await axios.delete("http://127.0.0.1:8000/api/blog/" + id + '/', {
            headers: {
                Authorization: `Token ${state.user.token}`
            }
        })
        if (res.status === 200 || res.status === 204) setIsHidden(true)
    }

    return <section className={`bg-white rounded-2xl flex gap-x-12 py-8 px-6 shadow-dark mt-8 relative ${isHidden ? 'hidden' : ''}`}>
        <div className='w-[540px] h-[360px] cursor-pointer' onClick={() => navigate('/blog/post/' + id + '/')}><img src={picture} className='w-[540px] h-[360px] object-cover rounded-2xl' /></div>
        <div className='flex flex-col font-inter cursor-pointer' onClick={() => navigate('/blog/post/' + id + '/')}>
            <p className='font-medium text-[30px] leading-9'>{title}</p>
            <span className='font-light text-[25px] leading-8 mt-6'>{description}</span>
            <br />
            <span className='font-light text-[25px] leading-8 mt-6'>{publish_date}</span>
        </div>
        {editing ? <div onClick={() => handleDelete()}><SmallButton variant='red' text='Удалить' className='bottom-4 right-8 absolute' /></div> : null}
    </section>
}