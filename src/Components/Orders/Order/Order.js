import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingrediants : Salad (1) , Meat (2) </p>
      <p>Price : <strong>$45.5</strong></p>
    </div>
  )
}

export default Order;