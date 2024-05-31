import { useEffect } from "react"
import axios from "axios"

export default function ReponseTest() {

    useEffect(() => {
      axios.get("https://silian.pythonanywhere.com/api/gyms/sportlite").then(res => console.log(res.data))
    }, [])

    return <></>
}