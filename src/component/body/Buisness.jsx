// import React from 'react'
// import layerImg from '../../assets/image/layer1.png'
// import layer2Img from '../../assets/image/layer2.png'
// import layer3Img from '../../assets/image/layer3.png'

// const Buisness = () => {
//   return (
//     <section className="mb-23.5 bg-[#EEFFF9] rounded-tl-[350px] rounded-br-[350px]">
//         <div className='container mx-auto'>
//             <div className='flex gap-40.75'>
//                 <div className='max-w-135.75 pt-51.5'>
//                     <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>Take your business</h2>
//                     <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>to new heights</h2> 
//                     <h2 className='font-lato font-semibold text-[45px] leading-13.5 text-dark'>with our top services.</h2> 
//                     <h5 className='font-lato font-normal text-[16px] leading-6.5 text-second mt-5 mb-7.75'>At our company, we pride ourselves on offering a variety of services to meet the diverse needs of our clients. Whether you're looking for marketing assistance, website design, or IT support, we've got you covered</h5>
//                     <button className='font-semibold font-lato text-[16px] text-[#FFFFFF] bg-[#06C279] rounded-[5px] py-[14.5px] px-6.25 hover:bg-green-400 mb-52'><a href="">Get In Touch Now</a></button>
//                 </div>
//                 <div className="flex gap-10">
//                     <div>
//                       <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 mt-17.5 cursor-pointer group'>
//                           <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
//                               <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layerImg} alt="" />
//                               <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
//                               <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
//                           </div>
//                       </div>
//                       <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-10'>
//                           <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
//                               <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layer2Img} alt="" />
//                               <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
//                               <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
//                           </div>
//                       </div>
//                   </div>
//                     <div>
//                       <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-41.25'>
//                           <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
//                               <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layer3Img} alt="" />
//                               <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
//                               <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
//                           </div>
//                       </div>
//                       <div className='bg-[#FFFFFF] rounded-[10px] w-65.25 h-58.75 cursor-pointer group mt-10'>
//                           <div className='hover:bg-[rgba(6,194,122,0.5)] rounded-[10px] transition duration-500 w-full h-full'>
//                               <img className="mb-2.5 group-hover:brightness-0 group-hover:invert transition duration-500 pl-22 pr-23 pt-10" src={layerImg} alt="" />
//                               <h2 className='text-center font-lato font-semibold text-[20px] leading-7.5 text-dark mb-1.25 group-hover:text-white transition duration-500'>Happy Clients</h2>
//                               <h3 className='text-center font-lato font-normal text-[16px] leading-6 text-second mb-9.75 group-hover:text-white transition duration-500'>500+</h3>
//                           </div>
//                       </div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Buisness




import React from 'react'
import layerImg from '../../assets/image/layer1.png'
import layer2Img from '../../assets/image/layer2.png'
import layer3Img from '../../assets/image/layer3.png'

const Buisness = () => {
  const cardsLeft = [
    {
      image: layerImg,
      title: 'Happy Clients',
      value: '500+',
    },
    {
      image: layer2Img,
      title: 'Happy Clients',
      value: '500+',
    },
  ]

  const cardsRight = [
    {
      image: layer3Img,
      title: 'Happy Clients',
      value: '500+',
    },
    {
      image: layerImg,
      title: 'Happy Clients',
      value: '500+',
    },
  ]

  const ServiceCard = ({ image, title, value }) => (
    <div className="group w-full min-w-0 min-h-55 sm:min-h-58.75 lg:min-h-58.75 bg-white rounded-[10px] cursor-pointer overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full min-h-55 sm:min-h-58.75 px-3 py-7 sm:py-8 rounded-[10px] bg-transparent group-hover:bg-[rgba(6,194,122,0.5)] transition-colors duration-500">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-4 group-hover:brightness-0 group-hover:invert transition duration-500"
          src={image}
          alt={title}
        />

        <h2 className="text-center font-lato font-semibold text-base sm:text-lg lg:text-[20px] leading-7 text-dark group-hover:text-white transition-colors duration-500">
          {title}
        </h2>

        <h3 className="text-center font-lato font-normal text-sm sm:text-base leading-6 text-second group-hover:text-white transition-colors duration-500">
          {value}
        </h3>
      </div>
    </div>
  )

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24 bg-[#EEFFF9] rounded-tl-[70px] rounded-br-[70px] sm:rounded-tl-[120px] sm:rounded-br-[120px] lg:rounded-tl-[220px] lg:rounded-br-[220px] xl:rounded-tl-[350px] xl:rounded-br-[350px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] gap-10 lg:gap-12 xl:gap-12 py-12 sm:py-16 lg:py-20 xl:py-0">

          {/* Left Content */}
          <div className="w-full max-w-135.75 mx-auto xl:mx-0 xl:pt-51.5 xl:pb-16">
            <h2 className="font-lato font-semibold text-[30px] leading-tight sm:text-[36px] lg:text-[42px] xl:text-[45px] xl:leading-13.5 text-dark">
              Take your business
            </h2>

            <h2 className="font-lato font-semibold text-[30px] leading-tight sm:text-[36px] lg:text-[42px] xl:text-[45px] xl:leading-13.5 text-dark">
              to new heights
            </h2>

            <h2 className="font-lato font-semibold text-[30px] leading-tight sm:text-[36px] lg:text-[42px] xl:text-[45px] xl:leading-[54px] text-dark">
              with our top services.
            </h2>

            <p className="font-lato font-normal text-sm sm:text-base leading-6 sm:leading-6.5 text-second mt-5 mb-7">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether
              you're looking for marketing assistance, website design, or
              IT support, we've got you covered.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center font-lato font-semibold text-sm sm:text-base text-white bg-[#06C279] rounded-[5px] py-3.5 px-5 sm:px-6 hover:bg-green-500 transition-colors duration-300"
            >
              Get In Touch Now
            </a>
          </div>

          {/* Responsive Service Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8 xl:gap-10 w-full max-w-140 mx-auto xl:mx-0 xl:pt-16 xl:pb-16">

            {/* First Column */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:pt-7">
              {cardsLeft.map((card, index) => (
                <ServiceCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:pt-41.25">
              {cardsRight.map((card, index) => (
                <ServiceCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  value={card.value}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Buisness
