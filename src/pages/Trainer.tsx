import Photo from "../assets/3840x2304_0xac120003_14345271331566911576-1-2317132397.jpg"
import TrainerCardBig from "../components/TrainerCardBig"

export default function Trainer() {
    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <TrainerCardBig imageSrc={Photo} name="Генадин Леонид Васильевич" description={["Заслуженный тренер России", "Призер чемпионата мира 2029"]} contacts={["Телефон: +7(900)-370-32-34", "", ""]}/>
    </main>
}