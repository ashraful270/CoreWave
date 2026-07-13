import React from 'react'
import womenImg from '../../assets/image/women.png'
const Trial = () => {
  return (
    <section className='pt-21.5 pb-21.25 bg-[#06C279]'>
        <div className='container mx-auto'>
            <div className="relative">
                    <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-[#FFFFFF] pb-9.5 capitalize'>Don't worries, start your free trial today!</h2>
                    <a className='font-lato font-semibold text-[16px] bg-dark text-[#FFFFFF] rounded-[5px] py-[14.5px] px-6.25 hover:bg-[#FFFFFF] hover:text-dark' href="">Get Free Trial</a>
                    <img className='absolute -top-33 right-7 w-87.25 h-86.75' src={womenImg } alt="" />
            </div>
        </div>
    </section>
  )
}

export default Trial
