import React from 'react';
import Aux from '../../../../HOC/Aux/Aux';


const OrderSummary = ( props )=>{
  const list=Object.keys(props.type).map((data)=>{
    return (
    <li key={data}>
      <strong><span style={{textTransform: "capitalize"}}>{data}</span> : {props.type[data]}</strong>
    </li>)
  })
   
  return(
    <Aux>
      <h3>BurgerBuilder</h3>
      <p>Your Order Summary Is as follow</p>
       <ul>
         {list}
       </ul>
       <p>Total Cost : <strong>{props.price.toFixed(2)}</strong></p>
       <p>Continue to CheckOut</p>
    </Aux>
  )
}

export default OrderSummary;