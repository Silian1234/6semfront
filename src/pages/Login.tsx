import { FormEvent, useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordHidden, setPasswordHidden] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [wrongCredentials, setWrongCredentials] = useState(false)
    const { login } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!username) return setUsernameError(true)
        if (!password) return setPasswordError(true)

        const success = await login(username, password)
        if (!success) return setWrongCredentials(true)
        navigate('/profile/me')
    }

    return (
        <article className="">
            <hr className="border-0" />
            <section className="bg-white w-[500px] pb-8 mx-auto mt-24 rounded-[36px] border-black border-2">
                <div className="flex place-content-between py-5 pl-6 pr-4 select-none">
                    <p className="text-2xl font-inter tracking-tight leading-[29px] font-light">Авторизация</p>
                </div>
                <hr className='border-0 h-[1px] bg-gray-1' />
                <form onSubmit={handleSubmit}>
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md ${(usernameError || wrongCredentials) ? 'border-red-1' : 'border-gray-1'}`}>
                        <input className='mr-4 ml-7 block flex-grow outline-none' type="text" placeholder='Введите логин' value={username} onChange={e => {
                            setWrongCredentials(false)
                            setUsernameError(false)
                            setUsername(e.target.value)
                        }} />
                    </div>
                    {usernameError ? <p className='absolute text-red-1 ml-4 mt-1 font-inter'>Введите логин</p> : null}
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md ${(passwordError || wrongCredentials) ? 'border-red-1' : 'border-gray-1'}`}>
                        <input className='ml-7 block flex-grow outline-none' type={passwordHidden ? 'password' : 'text'} placeholder='Введите пароль' value={password} onChange={e => {
                            setWrongCredentials(false)
                            setPasswordError(false)
                            setPassword(e.target.value)
                        }} />
                        <div className='border-gray-1 border-l-[1px] mr-4 w-20 pl-3 select-none cursor-pointer text-center cursor-pofont-inter' onClick={() => setPasswordHidden(prev => !prev)}>{passwordHidden ? 'Показать' : 'Скрыть'}</div>
                    </div>
                    {(passwordError && !wrongCredentials) ? <p className='absolute text-red-1 ml-4 mt-1'>{passwordError}</p> : null}
                    {wrongCredentials ? <p className='absolute text-red-1 ml-4 mt-1 font-inter'>Указаны неверные данные</p> : null}
                    <div className='mx-4 mt-16'>
                        <button className='bg-orange-1 w-full h-16 font-bold text-white text-xl tracking-tight rounded-xl font-inter leading-[15px] active:bg-orange-2'>
                            Войти
                        </button>
                    </div>
                    <div className='mx-4 mt-4'>
                        <div className='bg-orange-600 w-full h-16 font-bold text-white text-xl tracking-tight rounded-xl font-inter leading-[15px] active:bg-orange-2 grid place-content-center' onClick={() => navigate('/register')}>
                            Зарегистрироваться
                        </div>
                    </div>
                </form>
            </section>
        </article>
    )
}