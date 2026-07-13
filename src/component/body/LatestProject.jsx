import React, { useState } from 'react'
import LatestWeb from '../../assets/image/page1.png'
import LatestImg from '../../assets/image/page2.png'
import LatesUi from '../../assets/image/page3.png'
const LatestProject = () => {
    const [active, setActive] = useState('Web Development');
    const categories = ['Mobile App', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Motion Graphic'];
  return (
      <section className='pt-22.75 pb-25'>
          <div className='container mx-auto'>
              <h2 className='pb-8.25 font-Lato font-semibold text-[45px] leading-13.5 text-BlackTextColor text-center'>Our Latest Project</h2>
              <div>
                  <ul className='flex gap-18.25 justify-center pb-13.25'>
                      {categories.map((item) => (
                          <li key={item} onClick={() => setActive(item)} className={`cursor-pointer font-Lato text-[16px] font-medium relative pb-5.25 duration-300 ${active === item ? 'text-Primary01 after:bg-[#06C279]' : 'text-BodyText after:bg-[#CECECE]'} after:content-[""] after:w-[200%] after:h-1 after:absolute after:bottom-0 after:-left-1/3`}>{item}</li>
                      ))}
                  </ul>
              </div>
              <div className='flex'>
                  <div>
                      <img className='rounded-[15px]' src={LatestWeb} alt="" />
                      <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Portfolio Landing Page</h3>
                      <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                  </div>
                  <div>
                      <img className='rounded-[15px]' src={LatestImg} alt="" />
                      <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Plant Landing Page</h3>
                      <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                  </div>
                  <div>
                      <img className='rounded-[15px]' src={LatesUi} alt="" />
                      <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Real Estate Landing Page</h3>
                      <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                  </div>
              </div>
              <div className='pt-11.5 text-center'>
                  <a className='px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300' href="">View All Projects</a>
              </div>
              <div className='text-center mt-8'>
                  <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400'><a href="">View All Projects</a></button>
              </div>
          </div>
      </section>
  )
}

export default LatestProject







