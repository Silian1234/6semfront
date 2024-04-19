import BlogCard from "../components/BlogCard"
import BlogOptions from "../components/BlogOptions"

export default function Blog() {
    return <main className="w-[1300px] flex mx-auto flex-col mt-36">
        <BlogOptions/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </main>
}