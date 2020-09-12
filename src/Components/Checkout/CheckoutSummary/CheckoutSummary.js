import React from 'react';
import BurgerSection from '../../BurgerBuilder/BurgerSection/BurgerSection';
import classes from './Summary.module.css'
import Button from '../../BurgerBuilder/Button/Button'

const Check = ( props )=>{
   return(
     <div className={classes.Check}>
     <h1>We Hope You will Like The Taste !!!</h1>
       <div style={{width:"100%"}}>
         <BurgerSection ingrediants={props.ingrediants} />
       </div>
       <Button btnType= "Danger" >Cancel</Button>
       <Button btnType= "Success" >Continue</Button>
     </div>
   )
}

export default Check;