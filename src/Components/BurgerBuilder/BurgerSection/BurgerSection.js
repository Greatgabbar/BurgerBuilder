import React from 'react';
import Aux from '../../HOC/Aux/Aux'
import Ingrediants from './Ingrediants/Ingrediants';
import classes from './BurgerSection.module.css'



const BurgerSection=( props )=>{
  const ingrediants=Object.keys(props.ingrediants)
                      .map((igKey)=>{
                        return [...Array(props.ingrediants[igKey])].map((_,i)=>{
                          return <Ingrediants type={igKey} key={igKey+i} />
                        })
                      });
  return(
    <Aux>
    <div className={classes.Section}>
      <Ingrediants type="bread-top" />
      {ingrediants}
      <Ingrediants type="bread-bottom" />
    </div>
    </Aux>
  )
} 

export default BurgerSection;