import { useParams } from "react-router-dom"
import Clients from "../components/Clients"
import Schedule from "../components/Schedule"
import ProfileCardBig from "../components/ProfileCardBig"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"
import EditIcon from '../assets/editprofile.svg'
import { User } from "../context/AuthContext"
import RedCrossIcon from '../assets/cross-circle-svgrepo-com.svg'
import GreenCheckIcon from '../assets/check-circle-svgrepo-com.svg'
import React from "react"

export default function Profile() {
    const [selectedFile, setSelectedFile] = useState<Blob>()
    const [editing, setEditing] = useState(false)
    const [inputDescription, setInputDescription] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [inputEmail, setInputMail] = useState('')

    const ref = useRef<HTMLInputElement>(null)

    const [userInfo, setUserInfo] = useState<User>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleClick = () => {
        if (!editing) return
        ref.current?.click()
    }

    const handleSubmit = async () => {
        if (!state.user) return
        const formData = new FormData()
        formData.append("phone_number", inputPhone)
        formData.append("description", inputDescription)
        formData.append("id", state.user.id.toString())
        formData.append("email", inputEmail)
        if (selectedFile)
            formData.append("avatar", selectedFile)

        const res = await axios.patch('http://127.0.0.1:8000/api/profiles/' + state.user.id + '/', formData)
        console.log(res)
        if (res.status === 200) setUserInfo(prev => ({...prev, email: inputEmail, phone: inputPhone, description: inputDescription, avatar: selectedFile ? URL.createObjectURL(selectedFile) : prev?.avatar}))
    }


    const { state } = useAuthContext()
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async (userId: string, myId: string) => {
            if (!id || !state.user) return
            const res = await axios.get('http://127.0.0.1:8000/api/profiles/' + (userId === 'me' ? myId : userId) + '/')
            console.log(res)
            if (res.status === 200) {
                setUserInfo({
                    first_name: res.data.user.first_name,
                    last_name: res.data.user.last_name,
                    email: res.data.user.email,
                    description: res.data.description,
                    groups: res.data.groups,
                    gyms: res.data.gyms,
                    is_staff: res.data.user.is_staff,
                    phone: res.data.phone_number,
                    id: res.data.user.id,
                    token: 'yes',
                    avatar: res.data.avatar
                })
                setInputDescription(res.data.description)
                setInputPhone(res.data.phone_number)
                setInputMail(res.data.user.email)
            }
        }

        if (id && state.user)
            fetchData(id, state.user.id.toString())
    }, [id, state.user])

    return userInfo && <main className="w-[1300px] flex mx-auto flex-col mt-36">
        {/* <ProfileCardBig imageSrc={userInfo!.avatar} name={userInfo.first_name + ' ' + userInfo.last_name} description={userInfo.description} phone={userInfo.phone} email={userInfo.email} gyms={userInfo.gyms} /> */}
        <p className="font-open-sans font-bold text-[36px] leading-[49px]">Профиль</p>
        <section className="mt-8 bg-white flex p-8 rounded-2xl gap-x-24 shadow-dark">
            <div className='w-[470px] h-[650px]'><img src={editing && selectedFile ? URL.createObjectURL(selectedFile) : userInfo!.avatar} className='object-cover w-full h-full rounded-2xl cursor-pointer' onClick={() => handleClick()} /><input className='hidden' type="file" accept=".jpg, .png, .jpeg" ref={ref} onChange={handleChange} /></div>
            {editing ?
                <div className='flex font-inter flex-col'>
                   <p className='font-medium text-[40px] leading-[48px]'>{userInfo.first_name + ' ' + userInfo.last_name}</p>
                    <textarea className='font-light text-[30px] leading-[32px] mt-16 h-48 bg-gray-7 rounded-md text-white px-4 resize-none' value={inputDescription} onChange={e => setInputDescription(e.target.value)} />
                    <span className='font-light text-[30px] leading-[32px] mt-12 block'>Телефон: <input className='inline font-light text-[30px] leading-[32px] bg-gray-7 rounded-md text-white px-4' value={inputPhone} onChange={e => setInputPhone(e.target.value)} /></span>
                    <span className='font-light text-[30px] leading-[32px] mt-4'>Электронная почта:</span>
                    <input className='inline font-light text-[30px] leading-[32px] bg-gray-7 rounded-md text-white px-4 h-10' value={inputEmail} onChange={e => setInputMail(e.target.value)} />
                    <span className='font-light text-[30px] leading-[32px] mt-4'>Залы:<br />{userInfo.gyms.map((item, index) => <React.Fragment key={index}><span>{item.name}</span>{index == userInfo.gyms.length - 1 ? '' : ';'}<br /></React.Fragment>)}</span>
                </div>
                :
                <div className='flex font-inter flex-col'>
                    <p className='font-medium text-[40px] leading-[48px]'>{userInfo.first_name + ' ' + userInfo.last_name}</p>
                    <span className='font-light text-[30px] leading-[32px] mt-16'>{userInfo.description}</span>
                    <span className='font-light text-[30px] leading-[32px] mt-12'>Телефон: {userInfo.phone}</span>
                    <span className='font-light text-[30px] leading-[32px] mt-4'>Электронная почта:<br />{userInfo.email}</span>
                    <span className='font-light text-[30px] leading-[32px] mt-4'>Залы:<br />{userInfo.gyms.map((item, index) => <React.Fragment key={index}><span>{item.name}</span>{index == userInfo.gyms.length - 1 ? '' : ';'}<br /></React.Fragment>)}</span>
                </div>
            }
        </section>
        <Schedule />
        <Clients />
        {editing ? <div className="fixed bottom-8 right-8 flex gap-4 cursor-pointer" onClick={() => setEditing(editing => !editing)}>
            <div className="size-16" onClick={() => handleSubmit()}><img src={GreenCheckIcon} /></div>
            <div className="size-16"><img src={RedCrossIcon} /></div>
        </div> : <div className="fixed bottom-8 right-8 size-16 cursor-pointer" onClick={() => setEditing(editing => !editing)}><img src={EditIcon} /></div>}
    </main>
}