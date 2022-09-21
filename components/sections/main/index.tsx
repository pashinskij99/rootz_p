import React from 'react';
import styles from './styles.module.scss'
import MainDescription from './mainDescription';
import MainMembers from './mainMembers';
import { motion } from 'framer-motion';
import clsx from "clsx";

const Main = () => {

  return(
    <motion.section
      id="section0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      <div className={clsx("container", styles.container)}>
        <div className={styles.main_content}>
          <MainDescription />
          <MainMembers />
        </div>
      </div>
    </motion.section>
  )
}

export default Main;