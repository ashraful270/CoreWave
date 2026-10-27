// import React from 'react'

// const Border = () => {
//   return (
//     <section>
//     <div className='container mx-auto border-2 border-[#E0E0E0]'>
        
//     </div>
//     <h4 className='py-3.25 text-center font-lato font-medium text-[14px] leading-5.5 text-second'>@2023 CoreWave. All copyrights reserved</h4>
//     </section>
//   )
// }

// export default Border



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
