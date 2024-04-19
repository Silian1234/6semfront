import Description from "../components/Description"
import HeroPhoto from "../components/HeroPhoto"
import Personnel from "../components/Personnel"
import Schedule from "../components/Schedule"
import Location from "../components/Location"

export default function Gym() {
    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <HeroPhoto title="СпортЛайт"/>
        <Description />
        <Personnel />
        <Schedule />
        <Location />
    </main>
}