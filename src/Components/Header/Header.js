import React from 'react'
import Aux from "../HOC/Aux/Aux"
import classes from './header.module.css'
import Logo from './Logo/Logo'
import Navitems from './NavItems/NavItems'
import ToggleDrawer from './ToggleDrawer/ToggleDrawer'

const Header = ( props )=>{
  return(
    <Aux>
    <header className={classes.Header}>
      <ToggleDrawer clicked={props.toggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
       <Navitems />
      </nav>
    </header>
    </Aux>
  )
}

export default Header;