import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  let inputEle = '';
  switch (props.type) {
    case 'input':
      inputEle = <input className={classes.InputEle} {...props.config} onChange={props.change} value={props.value} />
      break;
    case 'textarea':
      inputEle = <textarea className={classes.InputEle} {...props.config} onChange={props.change} value={props.value} />
      break;
    case 'checkbox':
      inputEle = (<select className={classes.InputEle} name={props.config.name}>
        {props.config.option.map((data)=>{
         return <option key={data.value} value={data.value} >{data.displayValue}</option>
        })}
      </select>)
      break;
    default:
      inputEle = <input className={classes.InputEle} {...props.config} onChange={props.change} value={props.value} />
      break;
  }
  return (
    <div className={classes.Input}>
      <label style={{ textTransform: 'capitalize' }} className={classes.Label}>{props.config.name}</label>
      {inputEle}
    </div>
  )
}

export default Input;