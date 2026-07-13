import React from 'react'
import WebImg from '../../assets/image/web.png'
import seoImg from '../../assets/image/seo.png'
import graphicImg from '../../assets/image/graphic.png'


const OurCourses = () => {
  return (
      <section className=' mb-22.75 bg-[#EEFFF9] w-full rounded-tl-[350px] rounded-br-[350px]'>
          <div className='container mx-auto'>
              <div className='flex gap-28.25 justify-between'>
                  <div className="flex gap-10">
                      <div className="flex flex-col gap-10">
                          <div className='bg-[#FFFFFF] rounded-[10px] w-78 h-80.5 mt-50.75 cursor-pointer'>
                              <div className='pb-15 pl-11.75 pt-10.5 group hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500'>
                                  <img className="mb-3 group-hover:brightness-0 group-hover:invert transition duration-500" src={WebImg} alt="" />
                                  <h2 className='font-lato font-semibold text-[20px] leading-7.5 text-dark mb-3 group-hover:text-white transition duration-500'>Web Development</h2>
                                  <h3 className='font-lato font-normal text-[16px] leading-6 text-second group-hover:text-white transition duration-500'>Web development is the art of creating engaging and visually appealing websites </h3>
                              </div>
                          </div>
                          <div className='bg-[#FFFFFF] rounded-[10px] w-78 h-80.5 mb-17.5 cursor-pointer'>
                              <div className='pb-15 pl-11.75 pt-10.5 group hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500'>
                                  <img className="mb-3 group-hover:brightness-0 group-hover:invert transition duration-500" src={seoImg} alt="" />
                                  <h2 className='font-lato font-semibold text-[20px] leading-7.5 text-dark mb-3 group-hover:text-white transition duration-500'>SEO Marketing</h2>
                                  <h3 className='font-lato font-normal text-[16px] leading-6 text-second group-hover:text-white transition duration-500'>Web development is the art of creating engaging and visually appealing websites </h3>
                              </div>
                          </div>
                      </div>
                      <div className='mt-17.5 mb-50.75'>
                          <div className="flex flex-col gap-10">
                              <div className='bg-[#FFFFFF] rounded-[10px] w-78 h-80.5 cursor-pointer'>
                                  <div className='pb-15 pl-11.75 pt-10.5 group hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500'>
                                      <img className="mb-3 group-hover:brightness-0 group-hover:invert transition duration-500" src={graphicImg} alt="" />
                                      <h2 className='font-lato font-semibold text-[20px] leading-7.5 text-dark mb-3 group-hover:text-white transition duration-500'>Graphic Design</h2>
                                      <h3 className='font-lato font-normal text-[16px] leading-6 text-second group-hover:text-white transition duration-500'>Web development is the art of creating engaging and visually appealing websites </h3>
                                  </div>
                              </div>
                              <div className='bg-[#FFFFFF] rounded-[10px] w-78 h-80.5 cursor-pointer'>
                                  <div className='pb-15 pl-11.75 pt-10.5 group hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500'>
                                      <img className="mb-3 group-hover:brightness-0 group-hover:invert transition duration-500" src={WebImg} alt="" />
                                      <h2 className='font-lato font-semibold text-[20px] leading-7.5 text-dark mb-3 group-hover:text-white transition duration-500'>Web Development</h2>
                                      <h3 className='font-lato font-normal text-[16px] leading-6 text-second group-hover:text-white transition duration-500'>Web development is the art of creating engaging and visually appealing websites </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='pt-83.75 pb-82'>
                      <h3 className='font-lato font-semibold text-[45px] leading-13.5 text-dark mb-7.25 w-109.25'>We offer a variety of services such as</h3>
                      <p className='font-normal font-lato text-[16px] leading-6.5 text-second mb-7.5 w-135.75'>At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</p>
                      <button className='font-lato font-semibold text-[16px] text-[#06C279] rounded-[5px] py-[14.5px] px-6.25 bg-[#DAF6EB]'><a href="">All Services</a></button>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default OurCourses





 


