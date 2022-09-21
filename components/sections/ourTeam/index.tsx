import React from 'react';
import { motion } from 'framer-motion';
import AboutProject from './aboutProject';
import LogIn from './logIn';
import styles from './styles.module.scss'
import TopTeam from './topTeam';

const OurTeam = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={styles.wrapper}
    >
      <div id='section3' className={styles.content}>
        <TopTeam />
        <LogIn />
        <AboutProject />
      </div>
    </motion.div>
  );
};

export default OurTeam;