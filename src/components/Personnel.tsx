import Trainer from "./Trainer"
import Photo1 from "../assets/dmitriy-nagiev-1430240479.jpg"
import Photo2 from "../assets/3840x2304_0xac120003_14345271331566911576-1-2317132397.jpg"

export default function Personnel() {
    return <article className="mt-16">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Тренерский состав</p>
        <section className="flex justify-between w-full flex-wrap mt-8">
            <Trainer imageSrc={Photo1} name="Генадин Леонид Васильевич" description={["Заслуженный тренер России", "Призер чемпионата мира 2029"]} />
            <Trainer imageSrc={Photo2} name="Викторина Анна Геннадьевна" description={["Заслуженный тренер России", "Призер чемпионата мира 2079"]} />
        </section>
    </article>
}