import React from 'react'
import classes from './ToggleDrawer.module.css'
const ToggleDrawer=(props)=>{
  return(
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ToggleDrawer;