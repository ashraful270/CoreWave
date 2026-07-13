import React from 'react'
import bannerImg from '../../assets/image/banner.png'
const Banner = () => {
  return (
      <section className='bg-[#EEFFF9]'>
          <div className='container mx-auto'>
              <div className='flex justify-between pt-6'>
                  <div className='w-131.5'>
                      <h2 className='font-lato font-light text-[60px] leading-[71.5px] text-dark'>Empower Your Team</h2>
                      <h2 className='font-lato font-bold text-[60px] leading-[71.5px] text-dark mb-9.25'>With CoreWave's</h2>
                      <p className='font-lato font-normal text-[20px] leading-7.5 text-[#717171] mb-12.75 w-127.75'>Boost Productivity and Wellness in Your Organization with
                          CoreWave's Advanced Tools and Techniques</p>
                      <div className='flex items-center gap-5'>
                          <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25'><a href="">Explore More</a></button>
                          <button className='font-semibold font-lato text-[16px] text-dark rounded-[5px] py-[14.5px] px-6.25 border-2 border-[#06C279] hover:bg-[#06C279] hover:text-white transition duration-500'>
                              <a href="https://youtu.be/qYqeXwYbfh8?si=PgU2gGhK9JBBmPDu">
                                  <div className='flex items-center justify-center gap-3'>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="20" height="20" rx="10" fill="#DAF6EB" />
                                          <path d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z" fill="#06C279" />
                                      </svg>
                                      Watch Video
                                  </div>
                              </a>
                          </button>
                      </div>
                  </div>
                  <img className='pr-20.75 pt-2.5' src={bannerImg} alt="banner" />
              </div>
          </div>
      </section>
  )
}

export default Banner


