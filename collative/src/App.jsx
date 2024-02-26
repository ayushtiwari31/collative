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
import Harmony from './components/Harmony/Harmony.jsx'
import Features from './components/Features/Features.jsx'
import Bottom from './components/Bottom/Bottom.jsx'
import AttriumNavbar from './components/AttriumNavbar/AttriumNavbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    {/* <AttriumNavbar/> */}
    <Home/>
    {/* <Explore/> */}
    <Harmony/>
    <SliderPage/>
    <Features/>
    <Testimonial/>
    <Bottom/>
    {/* <Footer/> */}
    </>
  )
}

export default App
