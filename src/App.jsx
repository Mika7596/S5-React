import { useState } from 'react'
import './App.css'
import Navbar from './components/atoms/navbar/Navbar'
import Button from './components/atoms/button/Button'
import Logo from './components/atoms/logo/Logo'

function App() {
  return (
    <>
    <Button button_content = "hola"> </Button>
    <Navbar></Navbar>
    <Logo></Logo>
    </>
  )
}

export default App
