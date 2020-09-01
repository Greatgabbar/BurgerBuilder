import React from 'react';
import Aux from '../../../../HOC/Aux/Aux';
import Button from '../../../Button/Button'

const OrderSummary = ( props )=>{
  const list=Object.keys(props.type).map((data)=>{
    return (
    <li key={data}>
      <strong><span style={{textTransform: "capitalize"}}>{data}</span> : {props.type[data]}</strong>
    </li>)
  })
   
  return(
    <Aux>
      <p>Your Order Summary Is as follow</p>
       <ul>
         {list}
       </ul>
       <p>Total Cost : <strong>{props.price.toFixed(2)}</strong></p>
       <p>Continue to CheckOut</p>
       <Button click={props.cancel} btnType="Danger">Cancel</Button>
       <Button click={props.confirm} btnType="Success">Continue</Button>
    </Aux>
  )
}

export default OrderSummary;