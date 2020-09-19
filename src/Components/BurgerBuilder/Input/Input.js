import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  let inputEle = '';
  switch (props.type) {
    case 'input':
      inputEle = <input className={classes.InputEle} {...props.config} value={props.value} />
      break;
    case 'textarea':
      inputEle = <textarea className={classes.InputEle} {...props.config} value={props.value} />
      break;
    default:
      inputEle = <input className={classes.InputEle} {...props.config} value={props.value} />
      break;
  }
  return (
    <div className={classes.Input}>
    <label style={{textTransform : 'capitalize'}} className={classes.Label}>{props.config.name}</label>
      { inputEle }
    </div>
  )
}

export default Input;