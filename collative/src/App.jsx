import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Explore from './components/Explore/Explore.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import SliderPage from './components/SliderPage/SliderPage.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Explore/>
    <Testimonial/>
    <SliderPage/>
    <Footer/>
    </>
  )
}

export default App
