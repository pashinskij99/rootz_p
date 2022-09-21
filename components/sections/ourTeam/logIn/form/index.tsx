import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import { motion } from 'framer-motion';

const textAnimation = {
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

interface IValidations {
  isEmpty: boolean 
  minLength: number
  isEmail?: boolean
}

const useValidation = (value : string, validations : IValidations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength' :
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break;
        case 'isEmpty':
          value
            ? setEmpty(false)
            : setEmpty(true)
          break;
        case 'isEmail' :
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true)
          break
      }
     }
  })

  return {
    isEmpty,
    minLengthError,
    emailError
  }
}

const useInput = (initialValue : string, validations : IValidations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    setValue(e.target.value)
  }
  const onBlur = () => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

const Form : React.FC = () => {
  const name = useInput('', {isEmpty: true, minLength: 8, })
  const email = useInput('', {isEmpty: true, minLength: 8, isEmail: true})

  return (
    <motion.form
      variants={textAnimation}
      className={styles.form}
      action="submit"
    >
      <h3>Log in</h3>
      <div className={styles.input_wrapper}>
        {(name.isDirty && name.isEmpty) && <div className={styles.error}>The field cannot be empty!!!</div>}
        {(name.isDirty && name.minLengthError) && <div className={styles.error}>Length must be at least {name.minLengthError} characters!!!</div>}
        <input onBlur={() => name.onBlur()} onChange={e => name.onChange(e)} value={name.value} className={styles.input_name} name="name" type="text" placeholder="Name"/>
      </div>
      <div className={styles.input_wrapper}>
        {(email.isDirty && email.isEmpty) && <div className={styles.error}>The field cannot be empty!!!</div>}
        {(email.isDirty && email.emailError) && <div className={styles.error}>Incorrect email!!!</div>}
        <input onBlur={() => email.onBlur()} onChange={e => email.onChange(e)} value={email.value} className={styles.input_email} name="email" type="text" placeholder="Email"/>
      </div>
      <button className={styles.btn_book}>Book a demo</button>
    </motion.form>
  );
};

export default Form;