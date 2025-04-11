import React from 'react'
import './header.css'
import Logo from '../../atoms/logo/Logo'
import Navbar from '../../atoms/navbar/Navbar'
import Button from '../../atoms/button/Button'

function Header() {
  return (
    <div className='header'>
        <Logo></Logo>
        <div className='menu'>
            <Navbar className="navbar"></Navbar>
            <Button button_content="LOGIN" button_class="button-red"></Button>
        </div>
    </div>
  )
}

export default Header