import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import twitter_icon from '../../assets/img/footer/Twitter.svg'
import facebook_icon from '../../assets/img/footer/Facebook.svg'
import linkedin_icon from '../../assets/img/footer/LinkedIn.svg'

const headquarters = ['1234 Taliban', 'Los Angeles, La 1234567', '(123) 456-7890']
const socialList = [
  {name: 'twitter', src: twitter_icon.src, href: '#'},
  {name: 'facebook', src: facebook_icon.src, href: '#'},
  {name: 'linkedin', src: linkedin_icon.src, href: '#'},
]

const textAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5
    },
  },
}

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <motion.div variants={textAnimation} className={styles.contacts}>
            <h2>Contacts</h2>
            <span>2019 Rootz Foundation. <br/>All rights reserved</span>
          </motion.div>
          <motion.div variants={textAnimation} className={styles.headquarters}>
            <h4>Headquarters</h4>
            <ul>
              {
                headquarters.map((item, i) => (
                  <li key={i}>{item}</li>
                ))
              }
            </ul>
          </motion.div>
          <motion.div variants={textAnimation} className={styles.social_media}>
            <h4>Social media</h4>
            <ul className={styles.social_list}>
              {
                socialList.map(({name, src, href}) => (
                  <li key={name}>
                    <a href={href}>
                      <img src={src} alt={name} />
                    </a>
                  </li>
                ))
              }
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;