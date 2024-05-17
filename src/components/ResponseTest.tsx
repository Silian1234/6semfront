import { useEffect } from "react"
import axios from "axios"

export default function ReponseTest() {

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/gyms/sportlite").then(res => console.log(res.data))
     //   fetch("http://127.0.0.1:8000/api/blog", {method: "GET"}).then(res => console.log(res))
    }, [])

    return <></>
}