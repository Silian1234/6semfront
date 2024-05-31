import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import BlogOptions from "../components/BlogOptions"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"
import RedCrossIcon from "../assets/cross-circle-svgrepo-com.svg"
import EditIcon from "../assets/editprofile.svg"

type Post = {
    title: string
    description: string
    picture: string
    id: string
    publish_date: string

}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([])
    const {state} = useAuthContext()
    const isStaff = state.user?.is_staff
    const [editing, setEditing] = useState(false)

    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/blog').then(res => {setPosts(res.data.reverse()); console.log(res.data)})
    }, [])

    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <BlogOptions showAdd={!!(state.user && state.user.is_staff)}/>
        {posts.map(post => <BlogCard title={post.title} description={post.description} picture={post.picture} publish_date={post.publish_date} id={post.id} editing={editing}/>)}
        {isStaff && editing ? <div className="fixed bottom-8 right-8 flex gap-4 cursor-pointer" onClick={() => setEditing(editing => !editing)}>
            <div className="size-16"><img src={RedCrossIcon} /></div>
        </div> : <div className="fixed bottom-8 right-8 size-16 cursor-pointer" onClick={() => setEditing(editing => !editing)}><img src={EditIcon} /></div>}
    </main>
}