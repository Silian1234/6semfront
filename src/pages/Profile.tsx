import { useParams } from "react-router-dom"
import Clients from "../components/Clients"
import Schedule from "../components/Schedule"
import ProfileCardBig from "../components/ProfileCardBig"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"
import { User } from "../context/AuthContext"

export default function Profile() {
    const [userInfo, setUserInfo] = useState<User>()

    const { state } = useAuthContext()

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async (userId: string, myId: string) => {
            if (!id || !state.user) return
            const res = await axios.get('http://127.0.0.1:8000/api/profiles/' + (userId === 'me' ? myId : userId) + '/')
            console.log(res)
            if (res.status === 200) {
                setUserInfo({
                    first_name: res.data.user.first_name,
                    last_name: res.data.user.last_name,
                    email: res.data.user.email,
                    description: res.data.description,
                    groups: res.data.groups,
                    gyms: res.data.gyms,
                    is_staff: res.data.user.is_staff,
                    phone: res.data.phone_number,
                    id: res.data.user.id,
                    token: 'yes',
                    avatar: res.data.avatar
                })
            }
        }

        if (id && state.user)
            fetchData(id, state.user.id.toString())
    }, [id, state.user])

    return userInfo && <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <ProfileCardBig imageSrc={userInfo!.avatar} name={userInfo.first_name + ' ' + userInfo.last_name} description={userInfo.description} phone={userInfo.phone} email={userInfo.email} gyms={userInfo.gyms} />
        <Schedule />
        <Clients />
    </main>
}