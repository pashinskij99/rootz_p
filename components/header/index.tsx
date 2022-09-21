import React, {Dispatch, SetStateAction, useState} from 'react'
import styles from './styles.module.scss'
import logo_img from '../../assets/img/logo/logo.svg'
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';
import { headerAnimate, headerTextAnimation } from '../../anim_variants';
import { useWindowSize } from 'react-use';

const arrNavList: string[] = ['Home', 'Our mission', 'Places', 'Team']

interface IHeader {
  setPopupActive: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<IHeader> = ({setPopupActive}) => {
  const [active, setActive] = useState<boolean>(false)

  const handleHamburger = () => {
    setActive(prevState => !prevState)
  }

  const { width } = useWindowSize()

  const getCurrentOffset = (width : number, i : number) => {
    if (width <= 768) {
      switch (i) {
        case 0:
          break
        case 1:
          return -50
          break
        case 2:
          return -100
          break
        case 3:
          return -150
          break 
      }
    }
  }

  return (
	  <motion.header
      initial={width <= 768 ? "" : "hidden"}
      whileInView={width <= 768 ? "" : "visible"}
      custom={0}
      viewport={{ once: true }}
      variants={headerAnimate}
      className={styles.header}
    >
      <div className={clsx("container-header", styles.container)}>
        <motion.div custom={2} variants={headerTextAnimation} className={styles.logo}>
          <img src={logo_img.src} alt="Logo" width={logo_img.width} height={logo_img.height}/>
        </motion.div>
        <div onClick={handleHamburger} className={clsx(styles.hamburger, active ? styles.open : '')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={clsx(styles.nav, active ? styles.open : '')}>
          <ul className={styles.nav_list}>
            {
              arrNavList.map((item, i) => (

                // <motion.button key={item}>
                  <Link
                    // activeClass={active}
                    to={"section" + i}
                    spy={true}
                    smooth={true}
                    offset={getCurrentOffset(width, i)}
                    duration={500}
                    key={item}
                    onClick={() => setActive(false)}
                    className={
                      clsx(
                        styles.list_item,
                        i === 0
                          ? styles.active
                          : ''
                      )
                    }
                  >
                     <motion.span custom={i + 3} variants={headerTextAnimation}>{item}</motion.span>
                   </Link>
                // </motion.button>

              ))
            }
          </ul>
        </nav>
        <motion.button
          onClick={() => setPopupActive(true)}
          custom={7}
          variants={headerTextAnimation}
          className={clsx(styles.btn_apply, active ? styles.open : '')}
        >Apply</motion.button>
      </div>
	  </motion.header>
  )
}

export default Header