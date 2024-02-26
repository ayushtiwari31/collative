import React from 'react'
import { Outlet } from 'react-router-dom'
import AttriumNavbar from '../AttriumNavbar/AttriumNavbar.jsx'
import Bottom from '../Bottom/Bottom'
import Footer from '../Footer/Footer.jsx'

function Layout({children}) {
  return (
    <>
    <AttriumNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout