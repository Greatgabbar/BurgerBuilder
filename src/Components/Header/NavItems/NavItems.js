import React from 'react'
import classes from './Navitems.module.css'
import Navitem from './Navitem/Navitem'


const Navitems=(props)=>{
  return(
     <ul className={classes.Navitems}>
       <Navitem link="/" active>BurgerBuilder</Navitem>
       <Navitem link="/">Checkout</Navitem>
     </ul>
 )
}

export default Navitems;