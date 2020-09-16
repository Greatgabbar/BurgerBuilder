import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  let inputEle = '';
  switch (props.inputtype) {
    case 'input':
      inputEle = <input className={classes.InputEle} {...props} />
      break;
    case 'textarea':
      inputEle = <textarea className={classes.InputEle} {...props} />
      break;
    default:
      inputEle = <input className={classes.InputEle} {...props} />
      break;
  }
  return (
    <div className={classes.Input}>
    <label style={{textTransform : 'capitalize'}} className={classes.Label}>{props.name}</label>
      { inputEle }
    </div>
  )
}

export default Input;