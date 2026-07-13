import React from 'react'
import Logo from '../../assets/image/logo.png'
const Navbar = () => {
  return (
      <section className='py-6 bg-[#EEFFF9]'>
          <div className='container mx-auto'>
              <div className='flex items-center justify-between'>
                  <a href=""><img src={Logo} alt="logo" /></a>
                  <div>
                      <ul className="flex gap-11.25 ml-104 mr-35.5 font-medium text-[16px] text-dark font-lato">
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">Home</a></li>
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">About</a></li>
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">Portfolio</a></li>
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">Services</a></li>
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">Blog</a></li>
                          <li className='hover:text-[#06C279] transition duration-700'><a href="">Testimonial</a></li>
                      </ul>
                  </div>
                  <div><button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] hover:bg-green-400 py-[14.5px] px-6.25'><a href="">Register</a></button></div>
              </div>
          </div>
      </section>
  )
}

export default Navbar
