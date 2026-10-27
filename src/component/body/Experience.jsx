

import React from 'react'
import expImg from '../../assets/image/experience.png'

const Experience = () => {
  return (
    <section className="mt-12 mb-16 sm:mt-16 sm:mb-20 lg:mt-20 lg:mb-24 xl:mt-[85px] xl:mb-25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-12 xl:gap-[145px]">

          {/* Left Content */}
          <div className="w-full lg:flex-1 lg:min-w-0">
            <h3 className="font-lato font-semibold text-[30px] leading-[1.2] sm:text-[36px] lg:text-[40px] xl:text-[45px] xl:leading-[54px] text-dark mb-5 sm:mb-7">
              Experience the power of Corewave
            </h3>

            <p className="font-normal font-lato text-sm sm:text-base leading-6 sm:leading-6.5 text-second mb-7 sm:mb-9 max-w-[550px]">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations,
              improve efficiency
            </p>

            <a
              href="#about"
              className="inline-flex items-center justify-center font-lato font-semibold text-sm sm:text-base text-[#06C279] rounded-[5px] py-3.5 px-6 bg-[#DAF6EB] hover:bg-[#06C279] hover:text-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 lg:min-w-0 flex justify-center lg:justify-end">
            <img
              src={expImg}
              alt="Experience the power of Corewave"
              loading="lazy"
              className="block w-full max-w-150 lg:max-w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
