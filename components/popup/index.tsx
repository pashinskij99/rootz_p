import React, {Dispatch, SetStateAction} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface IPopup {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  children: React.ReactElement
}


const Popup : React.FC<IPopup> = ({active, setActive, children}) => {
  return (
    <div className={clsx(styles.wrapper, active ? styles.active : '')} onClick={() => setActive(false)}>
      <div className={clsx(styles.modal_content, active ? styles.active : '')} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;