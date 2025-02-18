import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router'
import CursorComponent from '../../Components/CursorComponent/CursorComponent'
function UserLayout() {
  return (

    <>
      <CursorComponent />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
