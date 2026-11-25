import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import "../stile.css"

const Shell = () => {
  return (
    <div className="shell">
        <Header />

        <Outlet />
    </div>
  )
}

export default Shell