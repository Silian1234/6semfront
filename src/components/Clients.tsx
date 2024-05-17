import React, { useEffect, useState } from 'react'
import MagnifierIcon from '../assets/simple-line-icons_magnifier.svg'
import Client from './Client'

type Client = {
    firstName: string
    lastName: string
    group: string
    age: number
    club: string
}

export default function Clients() {
    const [clients, setClients] = useState<Client[]>([])
    const [displayClients, setDisplayClients] = useState<Client[]>([])
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setSearchInput(newValue)
        setDisplayClients(clients.filter(e => `${e.firstName} ${e.lastName}`.toLowerCase().startsWith(newValue.toLowerCase())))
    }

    let stringEnd = ''
    const numberString = displayClients.length.toString()
    const index = numberString.length - 1
    if (numberString[index] !== '1') stringEnd = 'ов'
    if (numberString[index] === '2' || numberString[index] === '3' || numberString[index] === '4') stringEnd = 'а'

    useEffect(() => { setClients([{ firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }, { firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }, { firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }]) }, [])
    useEffect(() => { setDisplayClients([{ firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }, { firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }, { firstName: "Denis", lastName: "Danilov", age: 18, club: "СпортЛайт", group: "Группа 4" }]) }, [])

    return <></> 
    // <>
    //     <p className='font-inter font-semibold text-3xl mt-20'>Клиенты</p>
    //     <section className='bg-white rounded-2xl mt-8 shadow-dark'>
    //         <div className="flex w-full mt-16 px-10 justify-between">
    //             <div className="col-span-2 flex border-gray-2 border-[1px] rounded-md w-[412px]">
    //                 <div className='border-gray-2 border-r-[1px] h-[46px] w-[51px] flex items-center justify-center'><img src={MagnifierIcon} className='block max-w-full w-[20px] h-[20px]' /></div>
    //                 <input className='block outline-none mr-4 ml-6 flex-grow' type="text" placeholder='ФИО клиента' value={searchInput} onChange={handleChange} />
    //             </div>
    //             <select className='w-[200px] text-gray-3 border-[1px] border-gray-2 rounded-md ml-4 pl-2 outline-none cursor-pointer' defaultValue="none">
    //                 <option value="none" className='text-gray-3'>Группа</option>
    //                 <option value="1" className='text-gray-3 w-full'>Группа 1</option>
    //                 <option value="2" className='text-gray-3'>Группа 2</option>
    //                 <option value="3" className='text-gray-3'>Группа 3</option>
    //             </select>
    //             <select className='w-[200px] text-gray-3 border-[1px] border-gray-2 rounded-md ml-4 pl-2 outline-none cursor-pointer' defaultValue="none">
    //                 <option value="none" className='text-gray-3'>Возраст</option>
    //                 <option value="12-" className='text-gray-3'>до 12 лет</option>
    //                 <option value="12-17" className='text-gray-3'>12-17 лет</option>
    //                 <option value="18-29" className='text-gray-3'>18-29 лет</option>
    //                 <option value="30-45" className='text-gray-3'>30-45 лет</option>
    //                 <option value="45+" className='text-gray-3'>45+ лет</option>
    //             </select>
    //             <select className='w-[200px] text-gray-3 border-[1px] border-gray-2 rounded-md ml-4 pl-2 outline-none cursor-pointer' defaultValue="none">
    //                 <option value="none" className='text-gray-3'>Зал</option>
    //                 <option value="sportlight" className='text-gray-3'>СпортЛайт</option>
    //                 <option value="sportikortortik" className='text-gray-3'>Спортикортортик</option>
    //             </select>
    //             <div className='ml-4'>
    //                 <button className='bg-dark-1 rounded-md text-md text-white h-full w-[120px]'>Найти</button>
    //             </div>
    //         </div>
    //         <div className='flex flex-col w-full'>
    //             <div className='flex mt-12 mb-8 justify-between items-center px-10'>
    //                 <p className='font-inder text-[15px] underline text-gray-3'>{displayClients.length} клиент{stringEnd}</p>

    //             </div>
    //             {displayClients.map((client, index) => <React.Fragment key={index}><Client firstName={client.firstName} lastName={client.lastName} club={client.club} age={client.age} group={client.group} /></React.Fragment>)}
    //             <hr className="h-[1px] bg-gray-2 border-[1px]" />
    //             <div className='mt-20' />
    //         </div>
    //     </section>

    // </>
}