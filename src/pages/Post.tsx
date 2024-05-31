import NavButton from "../components/NavButton"
import { useNavigate, useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import GreenCheckIcon from "../assets/check-circle-svgrepo-com.svg"
import RedCrossIcon from "../assets/cross-circle-svgrepo-com.svg"
import EditIcon from "../assets/editprofile.svg"
import CameraIcon from "../assets/CameraIcon.svg"
import axios from "axios"

export default function Post() {
    const { state } = useAuthContext()
    const [editing, setEditing] = useState(false)
    const [postInfo, setPostInfo] = useState({ title: '', description: '', id: '', picture: '', text: '' })
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState<Blob>()
    const [inputText, setInputText] = useState('')

    const navigate = useNavigate()

    const ref = useRef<HTMLInputElement>(null)

    const isStaff = state.user?.is_staff

    const { id } = useParams()

    const handleSubmit = async () => {
        if (id === 'new') {
            if (!selectedFile) return
            setPostInfo({ title: inputTitle, description: inputDescription, id: '', picture: URL.createObjectURL(selectedFile), text: inputText })
        }

        if (!state.user) return
        const formData = new FormData()
        formData.append("title", inputTitle)
        formData.append("description", inputDescription)
        if (selectedFile) formData.append("picture", selectedFile)
        formData.append("text", inputText)

        const res = await axios.patch("https://silian.pythonanywhere.com/api/blog/" + id + '/', formData, {
            headers: {
                Authorization: `Token ${state.user.token}`
            }
        })

        if (res.status === 200) navigate("/blog")
    }

    const handleUpload = async () => {
        if (!selectedFile || !state.user) return

        const formData = new FormData()
        formData.append("title", postInfo.title)
        formData.append("description", postInfo.description)
        formData.append("picture", selectedFile)
        formData.append("text", postInfo.text)

        const res = await axios.post("https://silian.pythonanywhere.com/api/blog/", formData, {
            headers: {
                Authorization: `Token ${state.user.token}`
            }
        })

        if (res.status === 201) navigate("/blog")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0])
        }
    }

    useEffect(() => {
        const fetchData = async (postId: string | undefined) => {
            if (!postId) return

            if (postId === 'new') {
                setPostInfo({ title: 'Введите титул', description: 'Введите описание', id: '', picture: CameraIcon, text: 'Введите текст' })
                setInputTitle('Введите титул')
                setInputDescription('Введите описание')
                setInputText('Введите текст')
                return
            }

            const res = await axios.get('https://silian.pythonanywhere.com/api/blog/' + postId + '/')
            console.log(res)
            if (res.status === 200) {
                setPostInfo(res.data)
                setInputTitle(res.data.title)
                setInputDescription(res.data.description)
                setInputText(res.data.text)
            }
        }
        fetchData(id)
    }, [id])

    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <h2 className="font-inter leading-[45px] text-[37px] font-medium">{editing ? "Режим редактора" : "Просмотр статьи"}</h2>
        <NavButton className="mt-10" />
        {isStaff && editing ?
            <>
                <input type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} className="font-inter leading-[45px] text-[37px] font-medium mt-10 bg-transparent" />
                <input type="text" value={inputDescription} onChange={e => setInputDescription(e.target.value)} className="font-inter leading-[45px] text-[28px] mt-4 bg-transparent" />
                <hr className="h-[1px] border-0 my-10 bg-gray-2" />

                <div onClick={() => ref.current?.click()}><img src={selectedFile ? URL.createObjectURL(selectedFile) : postInfo.picture} className={`w-full aspect-video rounded-3xl object-cover cursor-pointer ${id === 'new' ? 'object-fill' : ''}`} /><input className='hidden' type="file" accept=".jpg, .png, .jpeg" ref={ref} onChange={handleChange} /></div>
                <hr className="h-[1px] border-0 my-10 bg-gray-2" />
                <textarea value={inputText} onChange={e => setInputText(e.target.value)} className="font-inter font-extralight text-[20px] leading-[24px] gap-y-2 flex flex-col bg-transparent" />
            </>
            :
            <>
                <h2 className="font-inter leading-[45px] text-[37px] font-medium mt-10">{postInfo.title}</h2>
                <h3 className="font-inter leading-[45px] text-[28px] mt-4">{postInfo.description}</h3>
                <hr className="h-[1px] border-0 my-10 bg-gray-2" />

                <div><img src={postInfo.picture} className={`w-full aspect-video rounded-3xl object-cover ${id === 'new' ? 'object-fill' : ''}`} /></div>
                <hr className="h-[1px] border-0 my-10 bg-gray-2" />
                <p className="font-inter font-extralight text-[20px] leading-[24px] gap-y-2 flex flex-col">
                    {postInfo.text}
                </p>
                {isStaff && id === 'new' ? <div className='font-inter font-light text-[20px] leading-[14px] py-4 px-11 border-[1px] rounded-3xl flex justify-center items-center select-none cursor-pointer w-fit border-gray-6 self-end mt-10' onClick={() => handleUpload()}>
                    Опубликовать
                </div> : null}
            </>
        }
        {isStaff && editing ? <div className="fixed bottom-8 right-8 flex gap-4 cursor-pointer" onClick={() => setEditing(editing => !editing)}>
            <div className="size-16" onClick={() => handleSubmit()}><img src={GreenCheckIcon} /></div>
            <div className="size-16"><img src={RedCrossIcon} /></div>
        </div> : <div className="fixed bottom-8 right-8 size-16 cursor-pointer" onClick={() => setEditing(editing => !editing)}><img src={EditIcon} /></div>}
    </main>
}