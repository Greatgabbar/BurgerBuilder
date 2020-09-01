import React from 'react';
import classes from './Button.module.css'
import Aux from '../../HOC/Aux/Aux';

const Button = ( props ) => {
    return(
      <Aux>
        <div onClick={props.click} className={[classes.Button,classes[props.btnType]].join(' ')}>
        {props.children}
        </div>
      </Aux>
    )
}

export default Button