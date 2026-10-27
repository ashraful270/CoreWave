
import React from 'react'
import womenImg from '../../assets/image/women.png'

const Trial = () => {
  return (
    <section className="w-full overflow-hidden bg-[#06C279] py-12 sm:py-16 lg:py-21.5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-65 flex-col items-start justify-center sm:min-h-75 lg:min-h-70">
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl lg:max-w-[65%]">
            <h2 className="mb-7 max-w-xl font-lato text-3xl font-semibold leading-tight capitalize text-white sm:mb-8 sm:text-4xl sm:leading-tight lg:mb-9 lg:text-[45px] lg:leading-[1.2]">
              Don't worries, start your free trial today!
            </h2>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[5px] bg-dark px-6 py-3.5 font-lato text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-dark sm:text-base"
            >
              Get Free Trial
            </a>
          </div>

          {/* Image */}
          <img
            className="pointer-events-none mx-auto mt-8 h-auto w-[200px] max-w-[65%] object-contain sm:w-[240px] lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[300px] lg:max-w-[35%] lg:-translate-y-1/2 xl:right-7 xl:w-[349px]"
            src={womenImg}
            alt="Woman presenting the free trial"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Trial
