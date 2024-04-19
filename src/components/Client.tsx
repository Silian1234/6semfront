type ClientProps = {
    firstName: string
    lastName: string
    group: string
    age: number
    club: string
}

export default function Sotrudnik({ firstName, lastName, group, age, club }: ClientProps) {

    const ageToString = age.toString()
    const index = ageToString.length - 1
    const lastDigit = Number(ageToString[index])
    let ageString
    if (lastDigit === 1) ageString = `${age} год`
    else if (lastDigit > 1 && lastDigit < 5) ageString = `${age} года`
    else ageString = `${age} лет`

    return <>
        <hr className="h-[1px] bg-gray-2 border-[1px]" />
        <div className="flex w-full mt-4 items-center justify-between mb-4 px-10">
            <span className="text-[20px] leading-5 font-inter">{firstName} {lastName}</span>
            <span className="text-[14px] leading-4 font-inter">{group}</span>
            <span className="text-[14px] leading-4 font-inter">{ageString}</span>
            <span className="text-[14px] leading-4 font-inter mr-16">{club}</span>
        </div >
    </>
}



