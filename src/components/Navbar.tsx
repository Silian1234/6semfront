import { useNavigate } from 'react-router-dom'
import ExitIcon from "../assets/exit-svgrepo-com (1).svg"
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

export function Navbar() {
    
    const {state} = useAuthContext()
    const location = window.location.href.split('/')
    const page = location[location.length - 1]
    const main = page == ''
    const blog = page == 'blog'
    // const gyms = page == 'gyms'
    const profile = page == 'me'
    const login = !state.user && page =='login'
    const register = !state.user && page =='register'

    const navigate = useNavigate()

    const {logout} = useLogout()

    return <nav className="bg-dark-1 h-[67px] w-full relative">
       { state.user ? <div className='absolute size-[32px] right-16 -translate-y-1/2 top-1/2 cursor-pointer'><img src={ExitIcon} className='size-[32px] rotate-180' onClick={() => {logout(); navigate('/')}}/></div> : null}
        <div className="w-[1330px] flex mx-auto inter font-medium text-[20px] leading-[24px] gap-x-24 text-white justify-center items-center h-full">
            <span className={`cursor-pointer ${main ? 'text-orange-3' : ''}`} onClick={() => navigate('/')}>Страница клуба</span>
            <span className={`cursor-pointer ${blog ? 'text-orange-3' : ''}`} onClick={() => navigate('/blog')}>Мероприятия</span>
            {/* <span className={`cursor-pointer ${gyms ? 'text-orange-3' : ''}`} onClick={() => navigate('/gyms')}>Залы</span> */}
            <span className={`cursor-pointer ${profile || login || register ? 'text-orange-3' : ''}`} onClick={() => navigate(state.user ? '/profile/me' : '/login')}>{state.user ? "Мой профиль" : register ? "Регистрация" : "Войти"}</span>
        </div>
    </nav>
}