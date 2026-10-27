// import React from 'react'
// import bannerImg from '../../assets/image/banner.png'
// const Banner = () => {
//   return (
//       <section className='bg-[#EEFFF9]'>
//           <div className='container mx-auto'>
//               <div className='flex justify-between pt-6'>
//                   <div className='w-131.5'>
//                       <h2 className='font-lato font-light text-[60px] leading-[71.5px] text-dark'>Empower Your Team</h2>
//                       <h2 className='font-lato font-bold text-[60px] leading-[71.5px] text-dark mb-9.25'>With CoreWave's</h2>
//                       <p className='font-lato font-normal text-[20px] leading-7.5 text-[#717171] mb-12.75 w-127.75'>Boost Productivity and Wellness in Your Organization with
//                           CoreWave's Advanced Tools and Techniques</p>
//                       <div className='flex items-center gap-5'>
//                           <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25'><a href="">Explore More</a></button>
//                           <button className='font-semibold font-lato text-[16px] text-dark rounded-[5px] py-[14.5px] px-6.25 border-2 border-[#06C279] hover:bg-[#06C279] hover:text-white transition duration-500'>
//                               <a href="https://youtu.be/qYqeXwYbfh8?si=PgU2gGhK9JBBmPDu">
//                                   <div className='flex items-center justify-center gap-3'>
//                                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                           <rect width="20" height="20" rx="10" fill="#DAF6EB" />
//                                           <path d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z" fill="#06C279" />
//                                       </svg>
//                                       Watch Video
//                                   </div>
//                               </a>
//                           </button>
//                       </div>
//                   </div>
//                   <img className='pr-20.75 pt-2.5' src={bannerImg} alt="banner" />
//               </div>
//           </div>
//       </section>
//   )
// }

// export default Banner



import React from 'react'
import bannerImg from '../../assets/image/banner.png'

const Banner = () => {
  return (
    <section id="home" className="w-full overflow-hidden bg-[#EEFFF9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 pt-10 sm:gap-10 sm:pt-12 lg:flex-row lg:gap-6 lg:pt-16 xl:pt-6">
          
          {/* Left Content */}
          <div className="w-full min-w-0 lg:w-1/2 xl:max-w-[526px]">
            <h1 className="font-lato text-4xl font-light leading-tight text-dark sm:text-5xl lg:text-[48px] lg:leading-[1.2] xl:text-[60px] xl:leading-[1.19]">
              Empower Your Team
            </h1>

            <h2 className="mb-6 font-lato text-4xl font-bold leading-tight text-dark sm:mb-7 sm:text-5xl lg:mb-8 lg:text-[48px] xl:mb-[37px] xl:text-[60px] xl:leading-[1.19]">
              With CoreWave's
            </h2>

            <p className="mb-8 max-w-xl font-lato text-base font-normal leading-7 text-[#717171] sm:mb-9 sm:text-lg sm:leading-7 lg:mb-10 lg:text-[18px] xl:mb-[51px] xl:text-[20px] xl:leading-[30px]">
              Boost Productivity and Wellness in Your Organization with
              CoreWave's Advanced Tools and Techniques
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-stretch gap-4 min-[400px]:flex-row min-[400px]:items-center sm:gap-5">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-[5px] bg-[#06C279] px-5 py-3.5 font-lato text-sm font-semibold text-white transition duration-300 hover:bg-green-500 sm:px-6 sm:text-base"
              >
                Explore More
              </a>

              <a
                href="https://youtu.be/qYqeXwYbfh8?si=PgU2gGhK9JBBmPDu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[5px] border-2 border-[#06C279] px-5 py-3 font-lato text-sm font-semibold text-dark transition duration-500 hover:bg-[#06C279] hover:text-white sm:px-6 sm:text-base"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="10"
                    fill="#DAF6EB"
                  />
                  <path
                    d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z"
                    fill="#06C279"
                  />
                </svg>
                Watch Video
              </a>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="flex w-full min-w-0 justify-center lg:w-1/2 lg:justify-end">
            <img
              className="h-auto w-full max-w-105 object-contain sm:max-w-125 lg:max-w-full xl:mr-5"
              src={bannerImg}
              alt="CoreWave banner illustration"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
