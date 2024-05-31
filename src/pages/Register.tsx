import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passwordHidden, setPasswordHidden] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [wrongCredentials, setWrongCredentials] = useState(false)

    const navigate = useNavigate()
    const { register } = useRegister()

    const validateEmail = () => {
        if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(email)) {
            setEmailError(true)
            return false
        }
        return true
    }

    const validatePassword = () => {
        if (!/[a-z]/.test(password)) {
            setPasswordError('Пароль должен содержать маленькие буквы')
            return false
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Пароль должен содержать заглавные буквы')
            return false
        }
        if (password.length < 8) {
            setPasswordError('Пароль должен содержать как минимум 8 символов')
            return false
        }
        if (!/[0-9]/.test(password)) {
            setPasswordError('Пароль должен содержать цифры')
            return false
        }
        if (!/[$@!%*#?&]/.test(password)) {
            setPasswordError('Пароль должен содержать особые символы ($@!%*#?&)')
            return false
        }
        return true
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const success = await register(username, password, firstName, lastName, email)
        console.log(success)
        if (!success) return setWrongCredentials(true)
        navigate('/profile/me')

        if (!validateEmail() || !validatePassword()) return

    }

    return (
        <article className="">
            <hr className="border-0" />
            <section className="bg-white w-[500px] pb-8 mx-auto mt-24 rounded-[36px] border-black border-2">
                <div className="flex place-content-between py-5 pl-6 pr-4 select-none">
                    <p className="text-2xl font-inter tracking-tight leading-[29px] font-light">Регистрация</p>
                </div>
                <hr className='border-0 h-[1px] bg-gray-1' />
                <form onSubmit={handleSubmit}>
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md border-gray-1`}>
                        <input className='mr-4 ml-7 block flex-grow outline-none' type="text" placeholder='Введите логин' value={username} onChange={e => {
                            setWrongCredentials(false)
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md ${(emailError || wrongCredentials) ? 'border-red-1' : 'border-gray-1'}`}>
                        <input className='mr-4 ml-7 block flex-grow outline-none' type="text" placeholder='Введите адрес электронной почты' value={email} onChange={e => {
                            setWrongCredentials(false)
                            setEmailError(false)
                            setEmail(e.target.value)
                        }} />
                    </div>
                    {(emailError && !wrongCredentials) ? <p className='absolute text-red-1 ml-4 mt-1 font-inter'>Некорректный E-mail</p> : null}
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md border-gray-1`}>
                        <input className='mr-4 ml-7 block flex-grow outline-none' type="text" placeholder='Введите имя' value={firstName} onChange={e => {
                            setWrongCredentials(false)
                            setFirstName(e.target.value)
                        }} />
                    </div>
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md border-gray-1`}>
                        <input className='mr-4 ml-7 block flex-grow outline-none' type="text" placeholder='Введите фамилию' value={lastName} onChange={e => {
                            setWrongCredentials(false)
                            setLastName(e.target.value)
                        }} />
                    </div>
                    <div className={`flex place-content-between mt-12 border-[1px] mx-4 py-5 rounded-md ${(passwordError || wrongCredentials) ? 'border-red-1' : 'border-gray-1'}`}>
                        <input className='ml-7 block flex-grow outline-none' type={passwordHidden ? 'password' : 'text'} placeholder='Введите пароль' value={password} onChange={e => {
                            setWrongCredentials(false)
                            setPasswordError('')
                            setPassword(e.target.value)
                        }} />
                        <div className='border-gray-1 border-l-[1px] mr-4 w-20 pl-3 select-none cursor-pointer text-center cursor-pofont-inter' onClick={() => setPasswordHidden(prev => !prev)}>{passwordHidden ? 'Показать' : 'Скрыть'}</div>
                    </div>
                    {(passwordError && !wrongCredentials) ? <p className='absolute text-red-1 ml-4 mt-1'>{passwordError}</p> : null}
                    {wrongCredentials ? <p className='absolute text-red-1 ml-4 mt-1 font-inter'>Указаны неверные данные</p> : null}


                    <div className='mx-4 mt-16'>
                        <button className='bg-orange-1 w-full h-16 font-bold text-white text-xl tracking-tight rounded-xl font-inter leading-[15px] active:bg-orange-2'>
                            Зарегистрироваться
                        </button>
                        <div className='bg-orange-600 w-full h-16 font-bold text-white text-xl tracking-tight rounded-xl font-inter leading-[15px] active:bg-orange-2 grid place-content-center mt-4' onClick={() => navigate('/login')}>
                            Войти
                        </div>
                    </div>
                </form>
            </section>
        </article>
    )
}