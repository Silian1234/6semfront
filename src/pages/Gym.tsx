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
        axios.get("http://127.0.0.1:8000/api/gyms/" + id).then(res => { setGym(res.data) })
    }, [id])

    useEffect(() => {
        const setGymPersonnel = async () => {
            const getPersonnel = async (ids: string[]) => {
                const result: { image: string, name: string, description: string }[] = []
                ids.forEach(async (id) => {
                    const res = await axios.get('http://127.0.0.1:8000/api/profiles/' + id)
                    const newObject = { image: res.data.avatar, name: res.data.user.first_name + ' ' + res.data.user.last_name, description: res.data.description }
                    result.push(newObject)
                })

                return result
            }

            let result228: { image: string, name: string, description: string }[] | undefined
            if (gym) result228 = await getPersonnel(gym.users.map(user => user.toString()))
               
            if (result228) setPersonnel(result228)
        }

        setGymPersonnel()
        console.log(personnel)
    }, [gym])

    return <>
        {gym?.name ? <main className="w-[1300px] flex mx-auto flex-col mt-36">
            <HeroPhoto title={gym.name} pictures={gym.pictures} />
            <Description text={gym.description} />
           <Personnel/>
            <Schedule />
            <Location location={gym.location} />
        </main> : null}
    </>
}