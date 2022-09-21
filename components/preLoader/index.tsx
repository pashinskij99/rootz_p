import React from 'react';
import preloader_svg from '../../assets/preloader/preloader.svg'
import logo from '../../assets/img/logo/logo.svg'
import styles from './styles.module.scss'

const PreLoader = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo.src} alt=""/>
      <img className={styles.preloader} src={preloader_svg.src} alt="preloader"/>
    </div>
  );
};

export default PreLoader;