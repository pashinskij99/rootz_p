import React, {useEffect, useState} from 'react'
import Header from '../../components/header'
import styles from './styles.module.scss'
import Main from '../../components/sections/main';
import OurTeam from '../../components/sections/ourTeam';
import Category from '../../components/sections/category';
import Footer from '../../components/footer';
import Anchor from '../../components/anchor'
import PreLoader from '../../components/preLoader';
import Popup from '../../components/popup';
import Form from "../../components/sections/ourTeam/logIn/form";

type Props = {
  // 
}

const HomePage : React.FC<Props> = ({}) => {
  const [load, setLoad] = useState(false)
  const [popupActive, setPopupActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoad(true),2000)
  })

  useEffect(() => {
    if(popupActive) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [popupActive])

  return (
    <>
      {load
        ? (<div className={styles.wrapper}>
          <Header setPopupActive={setPopupActive}/>
          <Main/>
          <OurTeam/>
          <Category/>
          <Footer/>
          <Anchor/>
          <Popup active={popupActive} setActive={setPopupActive} >
            <Form />
          </Popup>
        </div>)
        : (<PreLoader/>)}
    </>
  )
}

export default HomePage