import GymCard from "../components/GymCard"
import HomePhotos from "../components/HomePhotos"
import SmallButton from "../components/SmallButton"

export default function Home() {
    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <HomePhotos />
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold mt-24">Наши залы</p>
        <section className="w-full flex flex-wrap justify-between mt-12">
            <GymCard editing={false}/>
            <GymCard editing={true}/>
        </section>
        <SmallButton variant="green" text="Добавить" className="mt-16 self-end"/>
    </main>
}