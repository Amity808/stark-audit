import React from 'react'
import StartAudit from "../components/StarkAudit"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Aduit = () => {
  return (
    <div className=' h-full'>
      <>
        <Navbar />
      </>
        <div>
            <StartAudit />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Aduit