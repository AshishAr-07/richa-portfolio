import React from 'react'
import Work from './_components/Work'
import AboutSection from './_components/About'
import WhyWork from './_components/WhyWork'
import Cta from './_components/Cta'
import Footer from './_components/Footer'
import Header from './_components/Header'
import Hero from './_components/Hero'

export default function page() {
  return (
    <main>
      <Header/>
        <Hero/>
        <Work/>
        <AboutSection/>
        <WhyWork/>
        <Cta/>
        <Footer/>
    </main>
  )
}
