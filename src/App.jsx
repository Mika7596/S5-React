import { useState } from 'react'
import './App.css'
import Header from './components/organisms/header/Header'
import PrimarySection from './components/organisms/primary/PrimarySection'
import Features from './components/organisms/features/Features'
import Extentions from './components/organisms/extentions/Extentions'
import Footer from './components/organisms/footer/Footer'

function App() {
  return (
    <>
    <Header></Header>
    <PrimarySection></PrimarySection>
    <Features></Features>
    <Extentions></Extentions>
    <Footer></Footer>
    </>
  )
}

export default App
