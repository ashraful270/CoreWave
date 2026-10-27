
import React from 'react'

import clientImg from '../../assets/image/clientImage3.png'
import clientImg1 from '../../assets/image/clientImage2.png'
import clientImg2 from '../../assets/image/clientImage1.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderLib from 'react-slick'

const Slider = SliderLib.default || SliderLib

const clients = [
  {
    image: clientImg,
    heading: 'Excellent Team!',
    name: 'Farhan Rio',
    role: 'Happy Seller',
    review:
      'The customer service team at this company was very responsive and helpful when I had questions about their products.',
  },
  {
    image: clientImg1,
    heading: 'Greate Service',
    name: 'Alizabeth Nancy',
    role: 'Happy Seller',
    review:
      'The customer service team at this company was very responsive and helpful when I had questions about their products.',
  },
  {
    image: clientImg2,
    heading: 'The Best Agency!',
    name: 'Jenny Wilson',
    role: 'Happy Seller',
    review:
      'The customer service team at this company was very responsive and helpful when I had questions about their products.',
  },
  {
    image: clientImg1,
    heading: 'The Best Agency!',
    name: 'Jenny Wilson',
    role: 'Happy Seller',
    review:
      'The customer service team at this company was very responsive and helpful when I had questions about their products.',
  },
]

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    adaptiveHeight: false,
    appendDots: (dots) => (
      <div className="static! mt-5!">
        <ul className="m-0! flex items-center justify-center gap-2.5">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2.5 w-8 rounded-full bg-gray-300 transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <section className="mb-16 overflow-hidden sm:mb-20 lg:mb-25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto pb-8 text-center font-Lato text-3xl font-semibold leading-tight capitalize text-BlackTextColor sm:pb-10 sm:text-4xl lg:pb-12 lg:text-[45px] lg:leading-[1.2]">
          What our clients saying
        </h2>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="px-2 sm:px-3">
              <article className="mb-10 flex h-full min-h-[390px] flex-col items-center justify-center rounded-[15px] border-2 border-[#F1F1F1] bg-white px-5 py-8 text-center shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] transition duration-300 hover:shadow-lg sm:min-h-[420px] sm:px-6 sm:py-9 lg:px-7 xl:px-8">
                {/* Client image */}
                <div className="relative mb-4">
                  <img
                    className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                  />

                  {/* Quote icon */}
                  <div className="absolute -left-2 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#343434] sm:-left-3 sm:h-10 sm:w-10">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path d="M10 11H5.5C5.8 8.5 7 7 9 5.8L7.8 3.8C4.2 5.7 2.5 8.5 2.5 12.5V19H10V11ZM21.5 11H17C17.3 8.5 18.5 7 20.5 5.8L19.3 3.8C15.7 5.7 14 8.5 14 12.5V19H21.5V11Z" />
                    </svg>
                  </div>
                </div>

                <h3 className="mb-2 font-Lato text-xl font-semibold leading-snug text-BlackTextColor sm:text-2xl">
                  {client.heading}
                </h3>

                {/* Star rating */}
                <div
                  className="mb-4 flex items-center justify-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                      viewBox="0 0 25 24"
                      fill="#FAB93C"
                      aria-hidden="true"
                    >
                      <path d="M12.36 0l3.82 7.74 8.55 1.24-6.18 6.03L20 23.52l-7.64-4.02-7.64 4.02 1.46-8.51L0 8.98l8.54-1.24L12.36 0z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-4 w-full max-w-sm text-center font-Lato text-sm font-normal leading-6 text-BodyText sm:text-base">
                  {client.review}
                </p>

                <h4 className="font-Lato text-base font-semibold leading-7 text-BlackTextColor sm:text-lg">
                  {client.name}
                </h4>

                <p className="font-Lato text-sm leading-6 text-BodyText">
                  {client.role}
                </p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Clients
