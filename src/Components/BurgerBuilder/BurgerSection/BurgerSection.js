import React from 'react';
import Aux from '../../HOC/Aux/Aux'
import Ingrediants from './Ingrediants/Ingrediants';
import classes from './BurgerSection.module.css'
const BurgerSection=( props )=>{
  return(
    <Aux>
    <div className={classes.Section}>
      <Ingrediants type="bread-top" />
      <Ingrediants type="salad" />
      <Ingrediants type="bacon" />
      <Ingrediants type="meat" />
      <Ingrediants type="cheese" />
      <Ingrediants type="bread-bottom" />
    </div>
    </Aux>
  )
} 

export default BurgerSection;