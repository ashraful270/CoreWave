import React from 'react'
import layerImg from '../../assets/image/layer1.png'
import layer2Img from '../../assets/image/layer2.png'
import layer3Img from '../../assets/image/layer3.png'

const Buisness = () => {
  return (
    <section className="mb-23.5 bg-[#EEFFF9] rounded-tl-[350px] rounded-br-[350px]">
        <div className='container mx-auto'>
            <div className='flex gap-40.75'>
                <div className='max-w-135.75 pt-51.5'>
                    <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>Take your business</h2>
                    <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>to new heights</h2> 
                    <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>with our top services.</h2> 
                    <h5 className='font-lato font-normal text-[16px] leading-6.5 text-second mt-5 mb-7.75'>At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</h5>
                    <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400 mb-52'><a href="">Get In Touch Now</a></button>
                </div>
                <div className="flex gap-10">
                    <div>
                      <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 mt-17.5 cursor-pointer group'>
                          <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
                              <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layerImg} alt="" />
                              <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
                              <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
                          </div>
                      </div>
                      <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-10'>
                          <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
                              <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layer2Img} alt="" />
                              <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
                              <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
                          </div>
                      </div>
                  </div>
                    <div>
                      <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-41.25'>
                          <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
                              <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layer3Img} alt="" />
                              <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
                              <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
                          </div>
                      </div>
                      <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-10'>
                          <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
                              <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layerImg} alt="" />
                              <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
                              <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Buisness
