import {useEffect, useState} from 'react'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<number>(0)

	const set = () => {
		setWindowSize(window.innerWidth)
	}

	useEffect(() => {
		set()
		window.addEventListener('resize', set)
		return () => {
			window.removeEventListener('resize', set)
		}
	})

  	return windowSize
}

export default useWindowSize