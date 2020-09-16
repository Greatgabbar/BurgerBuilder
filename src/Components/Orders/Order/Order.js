import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
  const data = [];
  for (let i in props.order) {
    data.push({ key: i, val: props.order[i] })
  }
  let order = data.map((data) => {
    return <span style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc',padding : '5px' }}
      key={data.key}>{data.key} ({data.val}) </span>
  })
  return (
    <div className={classes.Order}>
      <p>Ingrediants : {order} </p>
      <p>Price : <strong>${props.price.toFixed(1)}</strong></p>
    </div>
  )
}

export default Order;