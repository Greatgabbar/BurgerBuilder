import React from 'react';
import Aux from '../../HOC/Aux/Aux'
import List from './List/List';
import classes from './ManageSection.module.css'


const ManageSection = ( props )=>{
 const obj=Object.keys(props.type);
const list=obj.map((ingdata)=>{
  return(
    <List key={ingdata} disable={props.disable[ingdata]} click={()=>{props.added(ingdata)}} less={()=>{props.less(ingdata)}} type={ingdata}></List>
  )
})

return (
  <Aux>
    <div className={classes.Manage}>
    <p><strong>Your Total Amount is : {props.price.toFixed(2)}</strong></p>
      {list}
      <button disabled={props.purchasing} onClick={props.click} className={classes.OrderButton}>CheckOut</button>
    </div>
  </Aux>
)
}

export default ManageSection;