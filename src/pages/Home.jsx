import React from 'react'
import Header from '../components/organisms/header/Header'
import PrimarySection from '../components/organisms/primary/PrimarySection'
import Features from '../components/organisms/features/Features'
import Extentions from '../components/organisms/extentions/Extentions'
import FAQs from '../components/organisms/FAQs/FAQs'
import Footer from '../components/organisms/footer/Footer'
function Home() {
  return (
    <>
    <Header></Header>
    <PrimarySection></PrimarySection>
    <Features></Features>
    <Extentions></Extentions>
    <FAQs></FAQs>
    <Footer></Footer>
    </>
  )
}

export default Home