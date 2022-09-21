import React from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.scss'
import clsx from 'clsx'
import Form from "./form";
// type Props = {}

const textAnimation = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	visible: (custom : number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.4,
			duration: 0.3
		},
	}),
}

const LogIn = () => {
  return (
	<div className='container'>
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			className={styles.log_in}>
			<motion.div
				variants={textAnimation}
				className={clsx(styles.description, 'paragraph')}
			>
				<h2>Get started today!</h2>
				<p>
					Learn more about how you can save our planet&apos;s nature.
					From smart consumption to switching to renewable energy,
					each of us can do our part to save the planet.
				</p>
			</motion.div>
			<Form />
		</motion.div>
	</div>

  )
}

export default LogIn