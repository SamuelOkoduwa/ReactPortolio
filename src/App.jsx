import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Error404 from "./pages/Error404"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
