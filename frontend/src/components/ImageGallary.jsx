import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import {motion} from 'framer-motion'
import { EffectCoverflow, Navigation } from 'swiper/modules';
const ImageGallary = ({images}) => {
    console.log(images[0])
  return (
    <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0}} className='flex flex-col items-center m-10'>
        <h1 className='text-black text-4xl font-bold'>Image Gallary</h1>
        <h3 className='text-black text-2xl font-semibold mt-4'>Journey into the Wilderness: A Captivating Visual Safari</h3>
    <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container">
        {images.map((image)=>(
            <SwiperSlide className='swiper-slide'><img key={image} src={image} alt="animal" className='' /></SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
    </Swiper>
    </motion.div>
  )
}

export default ImageGallary
