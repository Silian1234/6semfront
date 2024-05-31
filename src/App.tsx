import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Gym from "./pages/Gym"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import { AuthContextProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gyms/:id' element={<Gym />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/post/:id' element={<Post />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <div className="h-24" />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
