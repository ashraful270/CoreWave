// import React from 'react'
// import logoImg from '../../assets/image/logo.png'
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaBehance } from "react-icons/fa6";
 
// const Footer = () => {
//   return (
//     <footer className='mt-25 mb-10.5'>
//         <div className='container mx-auto'>
//             <div className='flex gap-48.75'>
                     
//                 <div>
//                     <img src={logoImg} alt="" />
//                     <h4 className='font-lato font-normal text-3.5 leading-5.5 text-second mt-6.5 mb-1'>mukimsdesign@gmail.com</h4>
//                     <h5 className='font-lato font-normal text-3.5 leading-5.5 text-second'>+88 01767630044</h5>
//                     <div className='flex gap-[7.41px] mt-5 group'>
//                     <a className='py-[8.33px] px-[10.18px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaFacebookF/></a>
//                     <a className='py-[8.33px] px-[6.48px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaTwitter /></a>
//                     <a className='py-[8.33px] px-[6.48px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaLinkedinIn /></a>
//                     <a className='py-[8.33px] px-[6.48px] pr-[5.55px] bg-[#06C279] text-[#FFFFFF] rounded-[50%] hover:bg-[#05A965] hover:text-dark transition duration-500' href=""><FaBehance /></a>
//                 </div>
//                 </div>
//                     <div className='w-full'>
//                         <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-6.25'>Services</h3>
//                         <ul className='font-lato font-normal text-3.5 leading-5.5 text-second'>
//                             <li className='mb-2.25'>Web Design</li>
//                             <li className='mb-2.25'>Web Development</li>
//                             <li className='mb-2.25'>SEO Marketing</li>
//                             <li className='mb-2.25'>UI/UX Analysis</li>
//                             <li className='mb-2.25'>Digital Marketing</li>
//                         </ul>
//                     </div>
//                     <div className='w-full'>
//                         <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-6.25'>Help</h3>
//                         <ul className='font-lato font-normal text-3.5 leading-5.5 text-second'>
//                             <li className='mb-2.25'>Account</li>
//                             <li className='mb-2.25'>Support Center</li>
//                             <li className='mb-2.25'>Privacy Policy</li>
//                             <li className='mb-2.25'>Terms & Conditions</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className='font-semibold font-lato text-[20px] leading-7.5 text-dark mb-7.5'>Contact Us</h3>
//                         <input className='border-2 border-[#DDDDDD] py-3.25 pl-3.75 pr-57.25 mb-3.5 font-lato font-normal text-3.5 leading-5.5 text-second' type="email" placeholder='Enter your mail'/>
//                         <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400'><a href="">Request & Callback</a></button>
//                     </div>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer




import React, { useState } from 'react'
import logoImg from '../../assets/image/logo.png'

import { FaFacebookF } from 'react-icons/fa6'
import { FaTwitter, FaLinkedinIn, FaBehance } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const services = [
    'Web Design',
    'Web Development',
    'SEO Marketing',
    'UI/UX Analysis',
    'Digital Marketing',
  ]

  const helpLinks = [
    'Account',
    'Support Center',
    'Privacy Policy',
    'Terms & Conditions',
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      name: 'Behance',
      icon: <FaBehance />,
      href: 'https://www.behance.net/',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    const subject = encodeURIComponent('Request a Callback')
    const body = encodeURIComponent(
      `Hello, I would like to request a callback.\nMy email: ${email}`
    )

    window.location.href = `mailto:mukimsdesign@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <footer className="mt-16 w-full overflow-hidden pb-8 sm:mt-20 lg:mt-24 xl:mt-25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-8 xl:gap-10">

          {/* Company Information */}
          <div className="min-w-0">
            <a href="#home" aria-label="Go to homepage">
              <img
                src={logoImg}
                alt="Company logo"
                className="h-auto w-32 max-w-full object-contain sm:w-36"
                loading="lazy"
              />
            </a>

            <a
              href="mailto:mukimsdesign@gmail.com"
              className="mt-6 block break-words font-lato text-sm leading-6 text-second transition-colors duration-300 hover:text-[#06C279]"
            >
              mukimsdesign@gmail.com
            </a>

            <a
              href="tel:+8801767630044"
              className="mt-1 block font-lato text-sm leading-6 text-second transition-colors duration-300 hover:text-[#06C279]"
            >
              +88 01767630044
            </a>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C279] text-white transition-all duration-300 hover:bg-[#05A965] hover:text-dark hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="mb-5 font-lato text-xl font-semibold leading-8 text-dark sm:mb-6">
              Services
            </h3>

            <ul className="space-y-2.5 font-lato text-sm leading-6 text-second">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-[#06C279]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="min-w-0">
            <h3 className="mb-5 font-lato text-xl font-semibold leading-8 text-dark sm:mb-6">
              Help
            </h3>

            <ul className="space-y-2.5 font-lato text-sm leading-6 text-second">
              {helpLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="transition-colors duration-300 hover:text-[#06C279]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="min-w-0">
            <h3 className="mb-5 font-lato text-xl font-semibold leading-8 text-dark sm:mb-6">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit} className="w-full">
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail"
                required
                className="mb-3.5 block w-full min-w-0 rounded-[5px] border-2 border-[#DDDDDD] bg-white px-3.5 py-3 font-lato text-sm leading-6 text-second outline-none transition-colors duration-300 placeholder:text-second focus:border-[#06C279]"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[5px] bg-[#06C279] px-4 py-3.5 font-lato text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-500 sm:w-auto sm:text-base"
              >
                Request a Callback
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#DDDDDD] pt-5 text-center sm:mt-12">
          <p className="font-lato text-xs leading-5 text-second sm:text-sm">
            © {new Date().getFullYear()} CoreWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
