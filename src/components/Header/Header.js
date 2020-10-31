import React from 'react'
import Banner from '../Banner/Banner'
import NavbarComp from './Navbar'

export default function Header() {
  return (
    <header className="header__container">
      <NavbarComp />
      <Banner />
    </header>
  )
}
