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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Explore/> */}
<<<<<<< HEAD
    <Harmony/>
=======
>>>>>>> fd600d943c4467724bccfeff6fd0baa2a42d6fba
    <Testimonial/>
    <SliderPage/>
    <Features/>
    <Footer/>
    </>
  )
}

export default App
