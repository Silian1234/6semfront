import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { User, UserActions } from '../context/AuthContext'
import axios from 'axios'

export const useRegister = () => {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const register = async (username: string, password: string, first_name: string,
        last_name: string, email: string) => {
        setIsLoading(true)
        setError(null)

        try {
            console.log(email)
            const response = await axios.post('https://silian.pythonanywhere.com/api/auth/register/', { username, password, first_name, last_name, email })

            console.log(response.data)
            console.log(response.status)

            if (response?.status !== 201 && response?.status !== 200) {
                setError('Что-то пошло не так')
                console.log(response.status)
                console.log(true)
                setIsLoading(false)
                return false
            }

            if (response.status === 201 || response.status === 200) {
                const fullUser = await axios.get('https://silian.pythonanywhere.com/api/profiles/' + response.data.id)
                console.log(fullUser)
                const userObject: User = {
                    token: response.data.token,
                    email: fullUser.data.email,
                    first_name: fullUser.data.first_name,
                    last_name: fullUser.data.last_name,
                    description: fullUser.data.description,
                    groups: fullUser.data.user.groups,
                    gyms: fullUser.data.gyms,
                    id: response.data.id,
                    avatar: fullUser.data.avatar,
                    phone: fullUser.data.phone_number,
                    is_staff: fullUser.data.is_staff,
                    username: username
                }

                localStorage.setItem('user', JSON.stringify(userObject))
                dispatch({ type: UserActions.SET, payload: userObject })

                setIsLoading(false)
                return true
            }

        } catch (e) {
            console.log(e)
            setIsLoading(false)
            return false
        }


    }

    return { register, isLoading, error }
}