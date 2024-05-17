import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import BlogOptions from "../components/BlogOptions"
import axios from "axios"

type Post = {
    title: string
    description: string
    picture: string
    id: string
    publish_date: string

}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/blog').then(res => {setPosts(res.data); console.log(res.data)})
    }, [])

    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <BlogOptions />
        {posts.map(post => <BlogCard title={post.title} description={post.description} picture={post.picture} publish_date={post.publish_date}/>)}
    </main>
}