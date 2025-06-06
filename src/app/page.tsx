import AboutSection from '@/components/sections/about'
import ArrivalsSection from '@/components/sections/arrivals'
import HeroSection from '@/components/sections/hero'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ArrivalsSection />
      </section>

    </main>
  )
}

export default HomePage
