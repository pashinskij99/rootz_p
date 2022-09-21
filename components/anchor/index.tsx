import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
import Scroll from 'react-scroll'
import clsx from 'clsx';

// type Props = {}

const toTop = () => {
	const scroll = Scroll.animateScroll

	scroll.scrollToTop()
}

const Anchor = () => {

	const [visible, setVisible] = useState(false)

	const changeStateVisible = () => {
		// console.log(Math.floor(document.documentElement.clientHeight))
		if(window.pageYOffset > document.documentElement.clientHeight) {

			setVisible(true)

		} else {
			setVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeStateVisible)


		return () => window.removeEventListener('scroll', changeStateVisible)
	})

  return (
	<button onClick={toTop} className={clsx(styles.btn_anchor, visible ? styles.show : '')}>
		<i className={styles.btn_anchor_icon}></i>
	</button>
  )
}

export default Anchor