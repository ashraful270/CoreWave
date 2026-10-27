// import React, { useState } from 'react'
// import LatestWeb from '../../assets/image/page1.png'
// import LatestImg from '../../assets/image/page2.png'
// import LatesUi from '../../assets/image/page3.png'
// const LatestProject = () => {
//     const [active, setActive] = useState('Web Development');
//     const categories = ['Mobile App', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Motion Graphic'];
//   return (
//       <section className='pt-22.75 pb-25'>
//           <div className='container mx-auto'>
//               <h2 className='pb-8.25 font-Lato font-semibold text-[45px] leading-13.5 text-BlackTextColor text-center'>Our Latest Project</h2>
//               <div>
//                   <ul className='flex gap-18.25 justify-center pb-13.25'>
//                       {categories.map((item) => (
//                           <li key={item} onClick={() => setActive(item)} className={`cursor-pointer font-Lato text-[16px] font-medium relative pb-5.25 duration-300 ${active === item ? 'text-Primary01 after:bg-[#06C279]' : 'text-BodyText after:bg-[#CECECE]'} after:content-[""] after:w-[200%] after:h-1 after:absolute after:bottom-0 after:-left-1/3`}>{item}</li>
//                       ))}
//                   </ul>
//               </div>
//               <div className='flex'>
//                   <div>
//                       <img className='rounded-[15px]' src={LatestWeb} alt="" />
//                       <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Portfolio Landing Page</h3>
//                       <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
//                   </div>
//                   <div>
//                       <img className='rounded-[15px]' src={LatestImg} alt="" />
//                       <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Plant Landing Page</h3>
//                       <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
//                   </div>
//                   <div>
//                       <img className='rounded-[15px]' src={LatesUi} alt="" />
//                       <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Real Estate Landing Page</h3>
//                       <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
//                   </div>
//               </div>
//               <div className='pt-11.5 text-center'>
//                   <a className='px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300' href="">View All Projects</a>
//               </div>
//               <div className='text-center mt-8'>
//                   <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400'><a href="">View All Projects</a></button>
//               </div>
//           </div>
//       </section>
//   )
// }

// export default LatestProject





import React, { useState } from 'react'

import LatestWeb from '../../assets/image/page1.png'
import LatestImg from '../../assets/image/page2.png'
import LatesUi from '../../assets/image/page3.png'

const LatestProject = () => {
  const [active, setActive] = useState('Web Development')

  const categories = [
    'Mobile App',
    'Web Development',
    'UI/UX Design',
    'Graphic Design',
    'Motion Graphic',
  ]

  const projects = [
    // Web Development Projects
    {
      id: 1,
      image: LatestWeb,
      title: 'Portfolio Landing Page',
      description:
        'A modern and responsive portfolio website showcasing projects, skills, and professional experience.',
      category: 'Web Development',
    },
    {
      id: 2,
      image: LatestImg,
      title: 'Plant Landing Page',
      description:
        'A clean landing page design for a plant business with beautiful visuals and a user-friendly layout.',
      category: 'Web Development',
    },
    {
      id: 3,
      image: LatesUi,
      title: 'Real Estate Landing Page',
      description:
        'A professional real estate website designed to showcase properties and improve the browsing experience.',
      category: 'Web Development',
    },

    // Mobile App Projects
    {
      id: 4,
      image: LatestImg,
      title: 'Plant Care Mobile App',
      description:
        'A mobile app concept that helps users explore plants, manage plant care, and discover gardening tips.',
      category: 'Mobile App',
    },
    {
      id: 5,
      image: LatestWeb,
      title: 'Personal Finance App',
      description:
        'A mobile application concept for tracking expenses, managing budgets, and monitoring daily spending.',
      category: 'Mobile App',
    },
    {
      id: 6,
      image: LatesUi,
      title: 'Property Finder App',
      description:
        'A mobile-first property browsing experience with property listings and a simple search interface.',
      category: 'Mobile App',
    },

    // UI/UX Design Projects
    {
      id: 7,
      image: LatesUi,
      title: 'Real Estate UI/UX',
      description:
        'A user-focused interface concept with intuitive navigation, clear property details, and a consistent design system.',
      category: 'UI/UX Design',
    },
    {
      id: 8,
      image: LatestWeb,
      title: 'Portfolio Website UI',
      description:
        'A polished website interface concept with clear visual hierarchy and a smooth browsing experience.',
      category: 'UI/UX Design',
    },
    {
      id: 9,
      image: LatestImg,
      title: 'Plant Store UI Design',
      description:
        'A simple e-commerce interface concept focused on product discovery and easy navigation.',
      category: 'UI/UX Design',
    },

    // Graphic Design Projects
    {
      id: 10,
      image: LatestWeb,
      title: 'Creative Brand Design',
      description:
        'A visual branding concept featuring a consistent layout, typography, and a modern digital presentation.',
      category: 'Graphic Design',
    },
    {
      id: 11,
      image: LatestImg,
      title: 'Social Media Creative',
      description:
        'A social media graphic concept designed to communicate brand messages clearly and attract attention.',
      category: 'Graphic Design',
    },
    {
      id: 12,
      image: LatesUi,
      title: 'Promotional Campaign',
      description:
        'A promotional design concept combining strong visual elements and clear messaging for a digital campaign.',
      category: 'Graphic Design',
    },

    // Motion Graphic Projects
    {
      id: 13,
      image: LatestImg,
      title: 'Product Motion Concept',
      description:
        'A product presentation concept designed for animated transitions and engaging promotional visuals.',
      category: 'Motion Graphic',
    },
    {
      id: 14,
      image: LatesUi,
      title: 'Animated UI Concept',
      description:
        'A motion design concept exploring smooth interface transitions and interactive visual storytelling.',
      category: 'Motion Graphic',
    },
    {
      id: 15,
      image: LatestWeb,
      title: 'Brand Intro Animation',
      description:
        'A creative brand introduction concept planned around animated typography and dynamic visual elements.',
      category: 'Motion Graphic',
    },
  ]

  const filteredProjects = projects.filter(
    (project) => project.category === active
  )

  return (
    <section
      id="projects"
      className="w-full overflow-hidden py-12 sm:py-16 lg:py-20 xl:pt-22.75 xl:pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="mx-auto pb-7 text-center font-Lato text-3xl font-semibold leading-tight text-BlackTextColor sm:pb-8 sm:text-4xl lg:pb-10 lg:text-[45px] lg:leading-[1.2]">
          Our Latest Project
        </h2>

        {/* Categories */}
        <div className="mb-8 w-full overflow-x-auto pb-3 sm:mb-12 lg:mb-13.25">
          <ul className="mx-auto flex w-max min-w-full items-center justify-start gap-6 sm:justify-center sm:gap-8 lg:gap-10 xl:gap-[73px]">
            {categories.map((item) => (
              <li key={item} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  aria-pressed={active === item}
                  className={`relative whitespace-nowrap pb-3 font-Lato text-sm font-medium transition-colors duration-300 sm:pb-4 sm:text-base ${
                    active === item
                      ? 'text-Primary01 after:bg-[#06C279]'
                      : 'text-BodyText after:bg-[#CECECE]'
                  } after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:content-['']`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Cards */}
        <div
          key={active}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="min-w-0 animate-[fadeIn_0.35s_ease-in-out]"
            >
              <div className="overflow-hidden rounded-[15px] bg-gray-100">
                <img
                  className="block aspect-4/3 h-auto w-full rounded-[15px] object-cover transition-transform duration-500 hover:scale-105"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <h3 className="pb-2 pt-4 text-center font-Lato text-lg font-semibold leading-snug text-BlackTextColor sm:pt-5 sm:text-xl lg:text-[22px]">
                {project.title}
              </h3>

              <p className="mx-auto max-w-sm text-center font-Lato text-sm font-normal leading-6 text-BodyText sm:text-base">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="pt-9 text-center sm:pt-11">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-[5px] bg-Primary01 px-6 py-3.5 font-Lato text-sm font-semibold text-white transition duration-300 hover:shadow-lg sm:text-base"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default LatestProject

