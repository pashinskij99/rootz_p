import React from 'react';
import styles from './styles.module.scss'
import SliderComponent from "../../slider";
import slide1_img from '../../../assets/img/slider/1.jpg'
import slide2_img from '../../../assets/img/slider/2.jpg'
import slide3_img from '../../../assets/img/slider/3.jpg'
import slide4_img from '../../../assets/img/slider/4.jpg'
import slide5_img from '../../../assets/img/slider/5.jpg'

const Category = () => {
  const data = [
    [
      'Save watter',
      'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    ],
    [
      'Plant trees',
      'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    ],
    [
      'Save energy',
      'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    ],
    [
      'Avoid plastic',
      'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    ],
    [
      'Choose organic',
      'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    ],
  ]

  const images = [
    slide1_img, slide2_img, slide3_img, slide4_img, slide5_img,
  ]
  
  return (
    <div id='section2' className={styles.wrapper}>
      <SliderComponent elements={data} images={images} />
    </div>
  );
};

export default Category;