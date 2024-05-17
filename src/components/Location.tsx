import YandexMap from "./YandexMap"

type LocationProps = {
    location: { latitude: number, longitude: number, address: string }
}

export default function Location({location}: LocationProps) {
    return <article className="mt-16">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Геолокация клуба</p>
        <section className="bg-gray-400 mt-8 grid border-black border-2">
            <YandexMap center={[location.longitude, location.latitude]} address={location.address} />
        </section>
    </article>
}