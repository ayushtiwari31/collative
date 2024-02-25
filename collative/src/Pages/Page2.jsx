import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Explore from '../components/Explore/Explore'
import Bottom from '../components/Bottom/Bottom'
import Footer from '../components/Footer/Footer'
import Attrium from '../components/Attrium/Attrium'
import AttriumNavbar from '../components/AttriumNavbar/AttriumNavbar'

function Page2() {
  return (
    <>
    <AttriumNavbar/>
    <Attrium/>
    <Explore/>
    <Bottom/>
    <Footer/>
    </>
  )
}

export default Page2