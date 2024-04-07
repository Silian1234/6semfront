import { Map, Placemark } from "@pbe/react-yandex-maps"

type YandexMapProps = {
    center: [number, number]
    address: string
}

export default function YandexMap({ center, address }: YandexMapProps) {
    const defaultState = {
        center: center,
        zoom: 17,
    };


    return <>
        <div>
            <Map defaultState={defaultState} width={1296} height={649}>
                <Placemark geometry={center} options={{
                    iconColor: "#ED4543"
                }} properties={{ balloonContentBody: address, balloonContentHeader: "Спортивный клуб", iconCaption: "Aikido Club"}}  modules={['geoObject.addon.balloon']} />
            </Map>
        </div>
    </>
}