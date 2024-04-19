import { useState } from "react"
import BlogButton from "./BlogButton"

export default function BlogOptions() {

    const [selectedButtons, setSelectedButtons] = useState({ all: true, news: false, sales: false })

    return <>
        <section className="flex items-center justify-between font-inter font-light text-[25px] leading-8">
            <div className="flex gap-x-4">
                <div onClick={() => setSelectedButtons({ all: true, news: false, sales: false })}><BlogButton selected={selectedButtons.all} text="Все посты" /></div>
                <div onClick={() => setSelectedButtons({ all: false, news: true, sales: false })}><BlogButton selected={selectedButtons.news} text="Новости" /></div>
                <div onClick={() => setSelectedButtons({ all: false, news: false, sales: true })}><BlogButton selected={selectedButtons.sales} text="Акции" /></div>
            </div>
            <div className="bg-green-2 rounded-2xl h-[60px] flex justify-center items-center px-8 cursor-pointer shadow-dark">Добавить новость</div>
        </section>
    </>
}