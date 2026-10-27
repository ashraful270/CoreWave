// import React from 'react'
// import clientImg from '../../assets/image/clientImage3.png'
// import clientImg1 from '../../assets/image/clientImage2.png'
// import clientImg2 from '../../assets/image/clientImage1.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SliderLib from "react-slick";
// const Slider = SliderLib.default || SliderLib;


// const Clients = () => {


//     const settings = {
//         dots: true,
//         infinite: true,
//         centerMode: true,
//         className: "center",
//         centerPadding: "0px",
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         appendDots: dots => (
//             <div style={{ bottom: "-46px" }}>
//                 <ul className='flex justify-center items-center gap-3.25'>
//                     {dots}
//                 </ul>
//             </div>
//         ),
//         customPaging: i => (
//             <div className='w-8.75 h-2.5 bg-gray-300 rounded-full'>
//             </div>
//         )
//     };

//     return (
//         <section className='mb-25'>
//             <div className='container mx-auto'>

//                 <h2 className='pb-12 font-Lato font-semibold text-[45px] leading-13.5 text-BlackTextColor text-center capitalize'>What our clients saying</h2>
//                 <Slider {...settings}>
//                     <div className='px-3'>
//                         <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
//                             <div className='pb-3.75 relative'>
//                                 <img className='w-37 h-37 rounded-full' src={clientImg} alt="" />
//                                 <div className='absolute top-6 -left-3.5'>
//                                     <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="21.5" cy="21.5" r="21.5" fill="#343434" />
//                                         <g clip-path="url(#clip0_4478_26)">
//                                             <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white" />
//                                             <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_4478_26">
//                                                 <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>Excellent Team!</h3>
//                             <div className='flex gap-1.25 pb-5'>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                             </div>
//                             <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
//                             <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Farhan Rio</h3>
//                             <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
//                         </div>
//                     </div>
//                     <div className='px-3'>
//                         <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
//                             {/* Clients Image  */}
//                             <div className='pb-3.75 relative'>
//                                 <img className='w-37 h-37 rounded-full' src={clientImg1} alt="" />
//                                 <div className='absolute top-6 -left-3.5'>
//                                     <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="21.5" cy="21.5" r="21.5" fill="#343434" />
//                                         <g clip-path="url(#clip0_4478_26)">
//                                             <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white" />
//                                             <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_4478_26">
//                                                 <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>Greate Service</h3>
//                             {/* Star icon svg  */}
//                             <div className='flex gap-1.25 pb-5'>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                             </div>
//                             <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
//                             <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Alizabeth Nancy</h3>
//                             <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
//                         </div>
//                     </div>
//                     <div className='px-3'>
//                         <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
//                             {/* Clients Image  */}
//                             <div className='pb-3.75 relative'>
//                                 <img className='w-37 h-37 rounded-full' src={clientImg2} alt="" />
//                                 <div className='absolute top-6 -left-3.5'>
//                                     <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="21.5" cy="21.5" r="21.5" fill="#343434" />
//                                         <g clip-path="url(#clip0_4478_26)">
//                                             <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white" />
//                                             <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_4478_26">
//                                                 <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>The Best Agency!</h3>
//                             {/* Star icon svg  */}
//                             <div className='flex gap-1.25 pb-5'>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                             </div>
//                             <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
//                             <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Jenny Wilson</h3>
//                             <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
//                         </div>
//                     </div>
//                     <div className='px-3'>
//                         <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
//                             {/* Clients Image  */}
//                             <div className='pb-3.75 relative'>
//                                 <img className='w-37 h-37 rounded-full' src={clientImg1} alt="" />
//                                 <div className='absolute top-6 -left-3.5'>
//                                     <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="21.5" cy="21.5" r="21.5" fill="#343434" />
//                                         <g clip-path="url(#clip0_4478_26)">
//                                             <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white" />
//                                             <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white" />
//                                         </g>
//                                         <defs>
//                                             <clipPath id="clip0_4478_26">
//                                                 <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>The Best Agency!</h3>
//                             {/* Star icon svg  */}
//                             <div className='flex gap-1.25 pb-5'>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C" />
//                                 </svg>
//                             </div>
//                             <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
//                             <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Jenny Wilson</h3>
//                             <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
//                         </div>
//                     </div>
//                 </Slider>

//             </div>
//         </section>
//     )
// }

// export default Clients








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
      <div className="!static !mt-5">
        <ul className="!m-0 flex items-center justify-center gap-2.5">
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
