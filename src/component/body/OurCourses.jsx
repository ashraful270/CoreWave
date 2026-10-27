
import React from 'react'
import WebImg from '../../assets/image/web.png'
import seoImg from '../../assets/image/seo.png'
import graphicImg from '../../assets/image/graphic.png'

const OurCourses = () => {
  const services = [
    {
      image: WebImg,
      title: 'Web Development',
      description:
        'Web development is the art of creating engaging and visually appealing websites.',
    },
    {
      image: seoImg,
      title: 'SEO Marketing',
      description:
        'Improve your online visibility and help your business reach more potential customers.',
    },
    {
      image: graphicImg,
      title: 'Graphic Design',
      description:
        'Create engaging visuals and designs that communicate your brand message.',
    },
    {
      image: WebImg,
      title: 'Web Development',
      description:
        'Build responsive, user-friendly websites tailored to your business needs.',
    },
  ]

  return (
    <section className="mb-16 w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] bg-[#EEFFF9] sm:mb-20 sm:rounded-tl-[180px] sm:rounded-br-[180px] lg:mb-[91px] lg:rounded-tl-[250px] lg:rounded-br-[250px] xl:rounded-tl-[350px] xl:rounded-br-[350px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:py-20 xl:gap-16 xl:py-24">
          {/* Left: Service Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-5 xl:gap-8">
            {services.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className={`group flex min-w-0 min-h-65 flex-col justify-start rounded-[10px] bg-white p-6 transition-all duration-500 hover:bg-[rgba(6,194,122,0.85)] hover:shadow-xl sm:min-h-[280px] sm:p-6 lg:min-h-[290px] lg:p-5 xl:min-h-[322px] xl:p-7 ${
                  index % 2 === 1
                    ? 'sm:translate-y-0 lg:translate-y-8'
                    : ''
                }`}
              >
                <img
                  className="mb-4 h-12 w-12 object-contain transition duration-500 group-hover:brightness-0 group-hover:invert sm:h-14 sm:w-14"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <h2 className="mb-3 font-lato text-lg font-semibold leading-7 text-dark transition duration-500 group-hover:text-white sm:text-xl">
                  {service.title}
                </h2>

                <p className="font-lato text-sm font-normal leading-6 text-second transition duration-500 group-hover:text-white sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {/* Right: Content */}
          <div className="w-full py-2 sm:py-4 lg:py-0">
            <h3 className="mb-5 max-w-xl font-lato text-3xl font-semibold leading-tight text-dark sm:mb-6 sm:text-4xl lg:text-[40px] xl:mb-7 xl:text-[45px] xl:leading-[1.2]">
              We offer a variety of services such as
            </h3>

            <p className="mb-6 max-w-2xl font-lato text-sm font-normal leading-6 text-second sm:mb-7 sm:text-base sm:leading-7">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether
              you're looking for marketing assistance, website design, or IT
              support, we've got you covered.
            </p>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-[5px] bg-[#DAF6EB] px-6 py-3.5 font-lato text-sm font-semibold text-[#06C279] transition duration-300 hover:bg-[#06C279] hover:text-white sm:text-base"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCourses
