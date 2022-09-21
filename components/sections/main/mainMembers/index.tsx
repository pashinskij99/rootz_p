import React from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.scss'
import parrot_img from '../../../../assets/img/main/parrot_desktop.svg'
import parrot_mobile_img from '../../../../assets/img/main/parrot_mobile.svg'
import card_img from '../../../../assets/img/main/card.svg'
import card_top_icon from '../../../../assets/img/main/card_top_icon.svg'

// type Props = {}

const parrotAnimation = {
	hidden: {
		x: 10,
		opacity: 0,
	},
	visible: (custom : number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
			duration: 0.3
		},
	}),
}

const MainMembers = () => {
  return (
	<motion.div
		custom={12}
		variants={parrotAnimation}
		className={styles.main_members}
	>
		<img
			className={styles.parrot}
			src={parrot_img.src}
			width={parrot_img.width}
			height={parrot_img.height}
			alt="Parrot"
		/>
		<img
			className={styles.parrot_mobile}
			src={parrot_mobile_img.src}
			width={parrot_mobile_img.width}
			height={parrot_mobile_img.height}
			alt="Parrot"
		/>
		<div className={styles.card}>
			<img className={styles.card_background} src={card_img.src} alt="card"/>
			<div className={styles.card_description}>
			<i className={styles.card_top_icon}>
				<img src={card_top_icon.src} alt="card_icon"/>
			</i>
			<div className={styles.members_wrapper}>
				<p>Members</p>
				<span>29 128</span>
			</div>
			</div>
		</div>
	</motion.div>
  )
}

export default MainMembers