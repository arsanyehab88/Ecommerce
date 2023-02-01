import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function MainLayOut({cartItem,use,logout}) {
  return (
    <>
        <Navbar cartItem={cartItem} use={use} logout={logout}/>
        <Outlet/>
    </>
  )
}
