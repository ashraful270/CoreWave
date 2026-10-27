
import React from 'react'

const Border = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto border-t-2 border-[#E0E0E0]" />

      <h4 className="px-3 py-4 text-center font-lato text-xs font-medium leading-5 text-second sm:py-5 sm:text-sm">
        © {new Date().getFullYear()} CoreWave. All copyrights reserved
      </h4>
    </section>
  )
}

export default Border
