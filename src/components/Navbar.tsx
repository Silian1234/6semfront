import UserIcon from '../assets/Group 92.png'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
    const location = window.location.href.split('/')
    const page = location[location.length - 1]
    const main = page == ''
    const blog = page == 'blog'
    // const gyms = page == 'gyms'
    const profile = page == 'me'

    const navigate = useNavigate()

    return <nav className="bg-dark-1 h-[67px] w-full relative">
        <div className='absolute size-[43px] right-16 -translate-y-1/2 top-1/2 cursor-pointer'><img src={UserIcon} className='size-[43px]' /></div>
        <div className="w-[1330px] flex mx-auto inter font-medium text-[20px] leading-[24px] gap-x-24 text-white justify-center items-center h-full">
            <span className={`cursor-pointer ${main ? 'text-orange-3' : ''}`} onClick={() => navigate('/')}>Страница клуба</span>
            <span className={`cursor-pointer ${blog ? 'text-orange-3' : ''}`} onClick={() => navigate('/blog')}>Мероприятия</span>
            {/* <span className={`cursor-pointer ${gyms ? 'text-orange-3' : ''}`} onClick={() => navigate('/gyms')}>Залы</span> */}
            <span className={`cursor-pointer ${profile ? 'text-orange-3' : ''}`} onClick={() => navigate('/profile/me')}>Мой профиль</span>
        </div>
    </nav>
}