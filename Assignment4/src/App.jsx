import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/home"
import About from "./Components/about"
import Contact from "./Components/contact"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
