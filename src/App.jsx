import { useState } from 'react'
import './App.css'
import Header from './components/organisms/header/Header'
import PrimarySection from './components/organisms/primary/PrimarySection'
import Features from './components/organisms/features/Features'

function App() {
  return (
    <>
    <Header></Header>
    <PrimarySection></PrimarySection>
    <Features></Features>
    </>
  )
}

export default App
