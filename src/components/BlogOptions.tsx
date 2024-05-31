import { useNavigate } from "react-router-dom"

type BlogOptionsProps = {
    showAdd: boolean
}

export default function BlogOptions({ showAdd }: BlogOptionsProps) {

    const navigate = useNavigate()


    return <>
        <section className="flex items-center justify-between font-inter font-light text-[25px] leading-8 mb-12">
            <h2 className="font-inter leading-[45px] text-[37px] font-medium">Мероприятия</h2>
            {showAdd ? <div className="bg-green-2 rounded-2xl h-[60px] flex justify-center items-center px-8 cursor-pointer shadow-dark" onClick={() => navigate('post/new/')}>Добавить новость</div> : null}
        </section>
    </>
}