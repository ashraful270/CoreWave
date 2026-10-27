// import React from 'react'
// import Logo from '../../assets/image/logo.png'
// const Navbar = () => {
//   return (
//       <section className='py-6 bg-[#EEFFF9]'>
//           <div className='container mx-auto'>
//               <div className='flex items-center justify-between'>
//                   <a href=""><img src={Logo} alt="logo" /></a>
//                   <div>
//                       <ul className="flex gap-11.25 ml-104 mr-35.5 font-medium text-[16px] text-dark font-lato">
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">Home</a></li>
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">About</a></li>
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">Portfolio</a></li>
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">Services</a></li>
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">Blog</a></li>
//                           <li className='hover:text-[#06C279] transition duration-700'><a href="">Testimonial</a></li>
//                       </ul>
//                   </div>
//                   <div><button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] hover:bg-green-400 py-[14.5px] px-6.25'><a href="">Register</a></button></div>
//               </div>
//           </div>
//       </section>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import Logo from '../../assets/image/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonial', href: '#testimonial' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-50 w-full bg-[#EEFFF9]">
      <nav className="container mx-auto px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Go to homepage"
            className="shrink-0"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-auto w-28 object-contain sm:w-32 lg:w-36"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 font-lato text-sm font-medium text-dark lg:flex xl:gap-8 xl:text-base">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="whitespace-nowrap transition-colors duration-300 hover:text-[#06C279]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Register Button */}
          <a
            href="#register"
            className="hidden shrink-0 items-center justify-center rounded-[5px] bg-[#06C279] px-5 py-3.5 font-lato text-sm font-semibold text-white transition duration-300 hover:bg-green-500 xl:inline-flex xl:px-6 xl:text-base"
          >
            Register
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#06C279]/30 text-dark transition hover:bg-[#06C279]/10 lg:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? 'mt-4 grid-rows-[1fr] opacity-100'
              : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 rounded-xl border border-[#06C279]/15 bg-white p-3 shadow-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 font-lato text-base font-medium text-dark transition-colors duration-300 hover:bg-[#EEFFF9] hover:text-[#06C279]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#register"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-[5px] bg-[#06C279] px-5 py-3.5 font-lato text-base font-semibold text-white transition duration-300 hover:bg-green-500"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
