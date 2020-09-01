import React from 'react';
import classes from './List.module.css'

const List = ( props )=>{
return (
  <div className={classes.List}>
    <div className={classes.Label}><p><strong style={{textTransform : "capitalize"}}>{props.type}</strong></p></div>
    <button onClick={props.less} className={classes.Less}>LESS</button>
    <button onClick={props.click} className={classes.More}>MORE</button>
  </div>
)
}

export default List;