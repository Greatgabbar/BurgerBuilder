import React from 'react';
import Aux from '../../HOC/Aux/Aux';
import classes from './Modal.module.css'
import Backdrop from '../BurgerSection/BackDrop/Backdrop'

const Modal = ( props )=>{
  return(
    <Aux>
    <Backdrop show={props.show} click={props.click}/>
      <div className={classes.Modal} style={{
        transform : props.show ? 'translateY(0)': 'translateY(-100vh)'
        }}>
        {props.children}
      </div>
    </Aux>
  )
}
export default Modal;