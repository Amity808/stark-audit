import React from 'react'
import Navbar from '@/components/Navbar'
import { Hero } from "@/components/Hero"

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default Homepage