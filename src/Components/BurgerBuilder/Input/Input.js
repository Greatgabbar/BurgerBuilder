import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {

  let inputEle = '';
  const inputStyle = [classes.InputEle];
  if ((props.invalid && props.shouldValid) && props.touch) {
    inputStyle.push(classes.Invalid);
  }

  switch (props.type) {
    case 'input':
      inputEle = <input className={inputStyle.join(' ')} {...props.config} onChange={props.change} value={props.value} />
      break;
    case 'textarea':
      inputEle = <textarea className={inputStyle.join(' ')} {...props.config} onChange={props.change} value={props.value} />
      break;
    case 'checkbox':
      inputEle = (<select className={inputStyle.join(' ')} name={props.config.name} value={props.value} onChange={props.change}>
        {props.config.option.map((data) => {
          return <option key={data.value} value={data.value} >{data.displayValue}</option>
        })}
      </select>)
      break;
    default:
      inputEle = <input className={inputStyle.join(' ')} {...props.config} onChange={props.change} value={props.value} />
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