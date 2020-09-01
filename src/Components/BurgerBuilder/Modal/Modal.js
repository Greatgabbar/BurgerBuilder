import React from 'react';
import Aux from '../../HOC/Aux/Aux';
import classes from './Modal.module.css'

const Modal = ( props )=>{
  return(
    <Aux>
      <div className={classes.Modal} style={{transform : props.show ? 'translateY(0)': 'translateY(-100vh)'}}>
        {props.children}
      </div>
    </Aux>
  )
}
export default Modal;