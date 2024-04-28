import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Gym from "./pages/Gym"
import Trainer from "./pages/Trainer"
import Blog from "./pages/Blog"
import Post from "./pages/Post"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gym' element={<Gym />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/post' element={<Post />} />
          <Route path='/trainer' element={<Trainer />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <div className="h-24" />
      </BrowserRouter>
    </>
  )
}

export default App
