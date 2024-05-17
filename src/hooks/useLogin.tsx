import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { User, UserActions } from '../context/AuthContext'
import axios from 'axios'

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (username: string, password: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', { username, password })

            if (response?.status !== 200) {
                setError('Что-то пошло не так')
                setIsLoading(false)
                return false
            }

            if (response.status === 200) {
                const fullUser = await axios.get('http://127.0.0.1:8000/api/profiles/' + response.data.id)
                const userObject: User = {
                    token: response.data.token,
                    email: fullUser.data.user.email,
                    first_name: fullUser.data.user.first_name,
                    last_name: fullUser.data.user.last_name,
                    description: fullUser.data.description,
                    groups: fullUser.data.user.groups,
                    gyms: fullUser.data.gyms,
                    is_staff: fullUser.data.user.is_staff,
                    id: response.data.id,
                    avatar: fullUser.data.avatar,
                    phone: fullUser.data.phone_number
                }

                localStorage.setItem('user', JSON.stringify(userObject))
                dispatch({type: UserActions.SET, payload: userObject})

                setIsLoading(false)
                return true
            }

        } catch (e) {
            setIsLoading(false)
            return false
        }


    }

    return { login, isLoading, error }
}