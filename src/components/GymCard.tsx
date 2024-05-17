import { useNavigate } from 'react-router-dom'

type GymImage = {
    image: string
}

type GymCardProps = {
    slug: string
    address: string
    description: string
    name: string
    pictures: GymImage[]
}

export default function GymCard({ slug, address: location, description, name, pictures}: GymCardProps) {
    const navigate = useNavigate()

    return <>
        <section className="flex bg-white size-[638px] rounded-3xl flex-col shadow-dark cursor-pointer" onClick={() => navigate('/gyms/' + slug)}>
            <div className='w-full h-1/2 rounded-3xl'><img src={pictures[0].image} className='size-full object-cover rounded-3xl' /></div>
            <div className='relative h-1/2'>
                <div className='w-full h-1/2 flex flex-col px-9 relative'>
                    <h2 className='font-medium text-[25px] leading-[30px] font-inter mt-4'>{name}</h2>
                    <p className='font-inter text-[20px] leading-[32px] mt-14'>
                        <span className='line-clamp-2 break-words'>{description}</span>
                        <br />
                        <span>Адрес: {location}</span>
                    </p>
                </div>
                {/* {editing ? <div className='absolute bottom-6 right-9 gap-5 flex'>
                    <SmallButton text='Редактировать' variant='neutral' />
                    <SmallButton text='Удалить' variant='red' />
                </div> : null} */}
            </div>
        </section>
    </>
}