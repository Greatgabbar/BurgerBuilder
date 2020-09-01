import React from 'react';
import Logo from '../Logo/Logo';
import Navitems from '../NavItems/NavItems';
import classes from './Sidedrawer.module.css'
import Aux from '../../HOC/Aux/Aux';
import Backdrop from '../../BurgerBuilder/BurgerSection/BackDrop/Backdrop'

const Sidedrawer = (props) =>{
  let dependClass=[classes.Sidedrawer,classes.Close];
  if(props.open){
    dependClass=[classes.Sidedrawer,classes.Open];
  }
return(
  <Aux>
  <Backdrop show={props.open} click={props.closed}/>
    <div className={dependClass.join(' ')}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <Navitems />
      </nav>
    </div>
  </Aux>
)
}

export default Sidedrawer;