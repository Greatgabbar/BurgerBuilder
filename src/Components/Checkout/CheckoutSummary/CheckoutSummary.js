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
       <Button btnType= "Danger" click={props.cancel} >Cancel</Button>
       <Button btnType= "Success" click={props.continue} >Continue</Button>
     </div>
   )
}

export default Check;