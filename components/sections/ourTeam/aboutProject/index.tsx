import React, {useState} from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { motion } from 'framer-motion';

// type Props = {}

const questions = [
    [
      'What can I do to protect our planet?',
      'Not to make an open fire in ' +
      'nature and to clean up litter; not to ' +
      'pollute open water bodies; to switch ' +
      'to alternative energy sources; to ' +
      'reduce the use of non-renewable resources'
    ],
    [
      'How to save nature ecology?',
      'Not to make an open fire in ' +
      'nature and to clean up litter; not to ' +
      'pollute open water bodies; to switch ' +
      'to alternative energy sources; to ' +
      'reduce the use of non-renewable resources'
    ],
    [
      'What is nature conservation?',
      'Not to make an open fire in ' +
      'nature and to clean up litter; not to ' +
      'pollute open water bodies; to switch ' +
      'to alternative energy sources; to ' +
      'reduce the use of non-renewable resources'
    ],
]

const textAnimationLeft = {
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

const textAnimationRight = {
	hidden: {
		x: 10,
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

const AboutProject = () => {
	const [active, setActive] = useState<number | null>(null)

	const handleAnswersQuestions = (index: number) => {
		setActive(prevState => {
			if(prevState === index) return null
			else return index
		})
	}

	return (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.6 }}
		id='section1' className="container">
		<div className={styles.description_about_project}>
			<motion.div variants={textAnimationLeft} className={clsx(styles.contact_us, 'paragraph')}>
				<h2>Ready to Get started?</h2>
				<p>
					When pattern is mentioned in interior design,
					it is easy to asso- ciate it with a geometric
					patterned wallpaper or colourful prints
					on interior fabrics.
				</p>
				<button className={styles.btn_contact}>Contact us</button>
			</motion.div>
			<motion.div variants={textAnimationRight} className={styles.answers_on_questions}>
				<ul className={styles.list}>
					{
						questions.map((item, i) => (
							<li data-id={i} className={clsx(styles.list_item, active === i ? styles.active : '')} key={item[0]}>
								<div className={styles.question}>
									<h3>{item[0]}</h3>
									<button onClick={() => handleAnswersQuestions(i)}>
									{active === i ? '-' : '+'}
									</button>
								</div>
								<div className={styles.answers}>
									<p className={styles.description}>{item[1]}</p>
								</div>
							</li>
						))
					}
				</ul>
			</motion.div>
		</div>
	</motion.div>
  )
}

export default AboutProject