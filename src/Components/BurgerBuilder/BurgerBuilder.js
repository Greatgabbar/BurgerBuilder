import React, { Component } from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Header from '../Header/Header';
class BurgerBuilder extends Component{
  state={
    ingrediants:{
      meat:0,
      bacon:0,
      salad:0,
      cheese:0
    },
    price :{
      meat:2.1,
      bacon:3,
      salad:1,
      cheese:1.5
    },
    priceTotal:4
  }
  
  
  render(){
    return(
      <Aux>
        <Header/>
        <BurgerSection ingrediants={this.state.ingrediants}/>
        <ManageSection type={this.state.price} />
      </Aux>
    )
  }
} 

export default BurgerBuilder;