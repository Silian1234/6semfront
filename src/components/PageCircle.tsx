import BackgroundCircle from '../assets/Rectangle 26.svg'
import SelectedCircle from '../assets/Rectangle 34.svg'

type PageCircleProps = {
    selected?: boolean
}

export default function PageCircle({ selected }: PageCircleProps) {
    return <div className='h-4 w-4 relative flex justify-center items-center cursor-pointer'>
        <img src={BackgroundCircle} className='size-full absolute' />
        {selected ? <img src={SelectedCircle} className='size-1/2 absolute' /> : null}
    </div>
}