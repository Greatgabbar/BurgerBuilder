import React from 'react'
import classes from './Navitems.module.css'
import Navitem from './Navitem/Navitem'


const Navitems=(props)=>{
  return(
     <ul className={classes.Navitems}>
       <Navitem link="/" exact active>BurgerBuilder</Navitem>
       <Navitem link="/orders">Orders</Navitem>
     </ul>
 )
}

export default Navitems;