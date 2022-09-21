import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion';
import clsx from 'clsx';
import top_team_img from '../../../../assets/img/our_team/team.png'
import top_team_mobile_img from '../../../../assets/img/our_team/team_mobile.png'

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
			delay: custom * 0.4,
			duration: 0.3
		},
	}),
}

const TopTeam = () => {
  return (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
		className={clsx(styles.top_team, 'paragraph')}>
		<div className='container'>
			<motion.h2
				custom={1}
				variants={textAnimation}
			>Our Top Team</motion.h2>
			<motion.p
				custom={2}
				variants={textAnimation}
			>
				Learn more about how you can save our planet&apos;s nature.
			</motion.p>
			<motion.img
				custom={3}
				variants={textAnimation}
				className={styles.img_team}
				src={top_team_img.src}
				height={top_team_img.height}
				width={top_team_img.width}
				alt="top_team"
			/>
			<motion.img
				custom={3}
				variants={textAnimation}
				className={styles.img_team_mobile}
				src={top_team_mobile_img.src}
				height={top_team_mobile_img.height}
				width={top_team_mobile_img.width}
				alt="top_team"
			/>
		</div>
	</motion.div>
  )
}

export default TopTeam