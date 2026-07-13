import React from 'react'
import logoImg from '../../assets/image/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className='mt-25 mb-10.5'>
        <div className='container mx-auto'>
            <div className='flex gap-48.75'>
                     
                <div>
                    <img src={logoImg} alt="" />
                    <h4 className='font-lato font-normal text-3.5 leading-5.5 text-second mt-6.5 mb-1'>mukimsdesign@gmail.com</h4>
                    <h5 className='font-lato font-normal text-3.5 leading-5.5 text-second'>+88 01767630044</h5>
                    <div className='flex gap-[7.41px] mt-5 group'>
                    <a className='py-[8.33px] px-[10.18px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaFacebookF/></a>
                    <a className='py-[8.33px] px-[6.48px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaTwitter /></a>
                    <a className='py-[8.33px] px-[6.48px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaLinkedinIn /></a>
                    <a className='py-[8.33px] px-[6.48px] pr-[5.55px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaBehance /></a>
                </div>
                </div>
                    <div className='w-full'>
                        <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-6.25'>Services</h3>
                        <ul className='font-lato font-normal text-3.5 leading-5.5 text-second'>
                            <li className='mb-2.25'>Web Design</li>
                            <li className='mb-2.25'>Web Development</li>
                            <li className='mb-2.25'>SEO Marketing</li>
                            <li className='mb-2.25'>UI/UX Analysis</li>
                            <li className='mb-2.25'>Digital Marketing</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-6.25'>Help</h3>
                        <ul className='font-lato font-normal text-3.5 leading-5.5 text-second'>
                            <li className='mb-2.25'>Account</li>
                            <li className='mb-2.25'>Support Center</li>
                            <li className='mb-2.25'>Privacy Policy</li>
                            <li className='mb-2.25'>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-7.5'>Contact Us</h3>
                        <input className='border-2 border-[#DDDDDD] py-3.25 pl-3.75 pr-57.25 mb-3.5 font-lato font-normal text-3.5 leading-5.5 text-second' type="email" placeholder='Enter your mail'/>
                        <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400'><a href="">Request & Callback</a></button>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer



