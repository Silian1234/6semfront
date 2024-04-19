import ArrowIcon from "../assets/Vectorarrow.svg"
import ScheduleItem from "./ScheduleItem"
import Weekday from "./Weekday"

export default function Schedule() {

    const day = new Date().getDay()

    return <article className="mt-16">
        <p className="font-open-sans text-[30px] leading-[40px] font-semibold">Расписание</p>
        <section className="bg-white w-full mt-8 rounded-2xl shadow-dark">
            <div className="flex ">
                <div className="w-[75px] h-[75px] flex justify-center items-center border-b-[1px] border-gray-1 cursor-pointer"><img src={ArrowIcon} className="h-[25px] w-[14px]" /></div>
                <div className="grid grid-cols-7 flex-grow border-b-[1px] border-gray-1 border-r-[1px] border-r-white">
                    <Weekday selected={day === 1} date="12 апреля" day="Понедельник" first />
                    <Weekday selected={day === 2} date="13 апреля" day="Вторник" />
                    <Weekday selected={day === 3} date="14 апреля" day="Среда" />
                    <Weekday selected={day === 4} date="15 апреля" day="Четверг" />
                    <Weekday selected={day === 5} date="16 апреля" day="Пятница" />
                    <Weekday selected={day === 6} date="17 апреля" day="Суббота" />
                    <Weekday selected={day === 0} date="18 апреля" day="Воскресенье" last />
                </div>
                <div className="w-[75px] h-[75px] flex justify-center items-center cursor-pointer"><img src={ArrowIcon} className="h-[25px] w-[14px] rotate-180" /></div>
            </div>
            <div className="flex">
                <div className="w-[75px] grid grid-rows-7">
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">12:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">13:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">14:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">15:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">16:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">17:00</div>
                    <div className="font-inter font-light text-[15px] leading-[22px] flex justify-center pt-2 border-y-[1px] border-r-[1px] border-gray-1">18:00</div>
                </div>
                <div className="flex-grow bg-green-500 grid grid-cols-7 grid-rows-7 aspect-[4/3] border-gray-1 border-r-[1px]">
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"><ScheduleItem trainer="Генадин Л.В" group="Группа 4" club="СпортЛайт" address="ул. Ленина 34" /></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                    <div className="bg-white border-[1px] border-gray-1 flex justify-center items-center"></div>
                </div>
                <div className="w-[75px] flex flex-col">
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                    <div className="grid grid-rows-7 font-inter font-light text-[15px] leading-[22px]"></div>
                </div>
            </div>
            <div className="w-[1225px] border-t-[1px] border-gray-1 flex">
                <div className="w-[75px] h-[75px] border-gray-1 border-r-[1px]"></div>
                <div className="grid grid-cols-7 flex-grow border-gray-1 border-r-[1px]">
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                    <div className="border-x-[1px] border-gray-1"></div>
                </div>
            </div>
        </section>
    </article>
}

//170