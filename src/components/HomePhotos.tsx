import Photo1 from '../assets/shutterstock_218922028 1.png'
import Photo2 from '../assets/1667678216_17-sportishka-com-p-begushchii-sportsmen-vkontakte-20 1.png'
import Photo3 from '../assets/16448465 1.png'

export default function HomePhotos() {

    return <>
        <article className="w-full grid grid-cols-12 grid-rows-10 gap-5 h-[1050px] text-white">
            <section className="bg-orange-3 col-span-9 row-span-6 rounded-3xl flex flex-col px-[110px]">
                <h2 className='font-inter text-[60px] leading-[72px] mt-[70px]'>Спортивный <br />клуб</h2>
                <p className='font-open-sans text-[20px] leading-[27px] mt-12'>Школьный спортивный клуб - общественная организация учителей и обучающихся, способствующая развитию физической культуры, спорта и туризма в школе. Школьный спортивный клуб создаётся с целью организации и проведения спортивно-масовой работы в Учреждении во внеурочное время. Общее руководство клубом осуществляется Советом клуба. Состав Совета клуба утверждается приказом директора Учреждения. Школьный спортивный клуб имеет своё название.</p>
                {/* <div className='cursor-pointer font-inter text-[25px] leading-[30px] font-medium border-white border-[3px] px-6 w-fit py-2 self-end mt-12 select-none'>Узнать больше</div> */}
            </section>
            <div className="col-span-3 row-span-6 rounded-3xl"><img src={Photo1} className='object-cover size-full object-top rounded-3xl' /></div>
            <div className="col-span-5 row-span-4 rounded-3xl"><img src={Photo2} className='object-cover size-full object-top rounded-3xl' /></div>
            <div className="col-span-7 row-span-4 rounded-3xl"><img src={Photo3} className='object-cover size-full object-top rounded-3xl' /></div>
        </article>
    </>
}