
import React, {useEffect, useState} from 'react';
import styles from "./styles.module.scss";
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import prev_icon from '../../assets/img/slider/prev.svg'
import next_icon from '../../assets/img/slider/next.svg'
import clsx from "clsx";
import {useWindowSize} from 'react-use';

interface IImages {
  height: number
  src: string
  width: number
}
interface ISlider {
  elements: string[][]
  images: IImages[]
}

const SliderComponent : React.FC<ISlider> = ({elements, images}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3.5)
  const { width } = useWindowSize()
  console.log('1');
  
  useEffect(() => {
    if (width <= 1200 && width >= 992) setSlidesPerView(3)
    if (width <= 992 && width >= 768) setSlidesPerView(2.7)
    if (width < 768 && width > 400) setSlidesPerView(1.5)
    if (width < 400 && width > 350) setSlidesPerView(1.4)
    if (width < 350) setSlidesPerView(1.3)
    if (width > 1200) setSlidesPerView(3.5)
  }, [width, slidesPerView])

  return (
    <div
      className={styles.wrapper}>
      <Swiper
        className={styles.swiper}
        effect={"coverflow"}
        speed={1000}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: width <= 992 ? 0 : 120,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={100}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction', 
          clickable: false,
        }}
      >
        {
          elements.map((item, i) => (
            <SwiperSlide className={'border_radius' + (i + 1)} key={i}>
              <img className={'border_radius' + (i + 1)} src={images[i].src} alt="img" />
              <div className={clsx('swiper-background', 'border_radius' + (i + 1))}></div>
              <div className='swiper-description'>
                <h4>{item[0]}</h4>
                <p>{item[1]}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className='swiper-navigation'>
        <button className='swiper-button-prev'>
          <img src={prev_icon.src} alt="" />
        </button>
        <div className='swiper-pagination'></div>
        <button className='swiper-button-next'>
          <img src={next_icon.src} alt="" />
        </button>
      </div>
    </div>
  );
};



export default SliderComponent;