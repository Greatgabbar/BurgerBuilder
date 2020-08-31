import React from 'react';
import Aux from '../../HOC/Aux/Aux'
import Ingrediants from './Ingrediants/Ingrediants';
const BurgerSection=( props )=>{
  return(
    <Aux>
      <Ingrediants type="bread-top" />
      <Ingrediants type="bread-bottom" />
    </Aux>
  )
} 

export default BurgerSection;