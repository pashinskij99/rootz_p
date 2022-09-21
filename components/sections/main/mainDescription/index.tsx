import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import nature_img from '../../../../assets/img/main/headline.svg'
import location_icon from '../../../../assets/icons/location_icon.svg'

// type Props = {}

const textAnimation = {
	hidden: {
		y: -10,
		opacity: 0,
	},
	visible: (custom : number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			duration: 0.3
		},
	}),
}

const MainDescription = () => {
  return (
	<div
		className={styles.main_description}
	>
		<motion.img
			custom={9}
			variants={textAnimation}
			src={nature_img.src}
			width={nature_img.width}
			height={nature_img.height}
			alt="Nature needs you"
		/>
		<motion.p
			custom={10}
			variants={textAnimation}
		>
			The scale of the challenges facing our
			planet can seem daunting,
			but we can all do something.
		</motion.p>
		<motion.div
			custom={11}
			variants={textAnimation}
			className={styles.wrapper_input}
		>
			<input type="text" placeholder="Find the place to help"/>
			<button className={styles.btn_search}>Search</button>
			<i className={styles.icon}>
			<img
				src={location_icon.src}
				width={location_icon.width}
				height={location_icon.height}
				alt="location"
			/>
			</i>
		</motion.div>
	</div>
  )
}

export default MainDescription