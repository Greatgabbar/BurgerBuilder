import React from 'react';
import classes from './Button.module.css'
import Aux from '../../HOC/Aux/Aux';

const Button = ( props ) => {
    return(
      <Aux>
        <button onClick={props.click} disabled={props.disable} className={[classes.Button,classes[props.btnType]].join(' ')}>
        {props.children}
        </button>
      </Aux>
    )
}

export default Button