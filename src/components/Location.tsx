import YandexMap from "./YandexMap"

export default function Location() {
    return <article className="mt-16">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Геолокация клуба</p>
        <section className="bg-gray-400 mt-8 grid border-black border-2">
            <YandexMap center={[55.751433, 37.618878]} address="Москва, Ивановская площадь" />
        </section>
    </article>
}