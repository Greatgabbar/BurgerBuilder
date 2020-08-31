import React from 'react'
import classes from './Ingrediants.css'

const Ingrediants = ( props )=>{
  console.log("1");
switch(props.type){
  case ('bread-top'):
    return(
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );
  case ('bread-bottom'):
    return(
      <div className={classes.BreadBottom}></div>
    );
  case ('meat'):
    return(
      <div className={classes.Meat}></div>
    );
  break;
  case ('cheese'):
    return(
      <div className={classes.Cheese}></div>
    );
  break;
  case ('salad'):
    return(
      <div className={classes.Salad}></div>
    );
  break;  
  default:
    return;
  break;
}

}

export default Ingrediants;