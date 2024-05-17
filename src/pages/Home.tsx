import { useEffect, useState } from "react"
import GymCard from "../components/GymCard"
import HomePhotos from "../components/HomePhotos"
import axios from 'axios'

type Gym = {
    slug: string
    location: { latitude: number, longitude: number, address: string }
    description: string
    name: string
    pictures: {image: string}[]
}

export default function Home() {
    const [gyms, setGyms] = useState<Gym[]>([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/gyms").then(res => {setGyms(res.data); console.log(res.data)})
    }, [])

    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <HomePhotos />
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold mt-24">Наши залы</p>
        <section className="w-full flex flex-wrap justify-between mt-12">
            {gyms.map(gym => <GymCard slug={gym.slug} description={gym.description} address={gym.location.address} name={gym.name} pictures={gym.pictures}/>)}
        </section>
        {/* <SmallButton variant="green" text="Добавить" className="mt-16 self-end"/> */}
    </main>
}