import Description from "../components/Description"
import HeroPhoto from "../components/HeroPhoto"
import Personnel from "../components/Personnel"
import Schedule from "../components/Schedule"
import Location from "../components/Location"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

type Gym = {
    description: string
    location: { latitude: number, longitude: number, address: string }
    pictures: { image: string }[]
    users: number[]
    name: string
}

export default function Gym() {
    const [gym, setGym] = useState<Gym>()
    const [personnel, setPersonnel] = useState<{ image: string, name: string, description: string }[]>()

    const { id } = useParams()
    useEffect(() => {
        axios.get("https://silian.pythonanywhere.com/api/gyms/" + id).then(res => {
            setGym(res.data); console.log(res.data);
            setPersonnel(res.data.users.map((user: { avatar: unknown; user: { first_name: string; last_name: string }; description: unknown }) => ({ image: user.avatar, name: user.user.first_name + ' ' + user.user.last_name, description: user.description })))
        })
    }, [id])

    return <>
        {gym?.name ? <main className="w-[1300px] flex mx-auto flex-col mt-36">
            <HeroPhoto title={gym.name} pictures={gym.pictures} />
            <Description text={gym.description} />
            <Personnel personnel={personnel!} />
            <Schedule />
            <Location location={gym.location} />
        </main> : null}
    </>
}