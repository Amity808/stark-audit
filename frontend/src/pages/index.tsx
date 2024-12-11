import React from 'react'
import Navbar from '@/components/Navbar'
import { Hero } from "@/components/Hero"
import Foooter from '@/components/Footer'

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Foooter />
      </div>
    </div>
  )
}

export default Homepage