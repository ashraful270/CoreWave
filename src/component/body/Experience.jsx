import React from 'react'
import expImg from '../../assets/image/experience.png'
const Experience = () => {
  return (
    <section className='mt-21.25 mb-25'>
        <div className='container mx-auto'>
            <div className="flex justify-between gap-36.25">
                <div>
                <h3 className='font-lato font-semibold text-[45px] leading-13.5 text-dark mb-7.25 w-111.25'>Experience the power of Corewave</h3>
                <p className='font-normal font-lato text-[16px] leading-6.5 text-second mb-9 w-137.5'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
                <button className='font-lato font-semibold text-[16px] text-[#06C279] rounded-[5px] py-[14.5px] px-6.25 bg-[#DAF6EB]'><a href="">Learn More</a></button>
            </div>
            <img src={expImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Experience

