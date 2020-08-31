import React from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Header from '../Header/Header';
const BurgerBuilder=( props )=>{
  return(
    <Aux>
      <Header/>
      <BurgerSection />
      <ManageSection />
    </Aux>
  )
} 

export default BurgerBuilder;