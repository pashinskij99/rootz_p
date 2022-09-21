export const headerAnimate = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: (custom : number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4
    },
  }),
}

export const headerTextAnimation = {
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