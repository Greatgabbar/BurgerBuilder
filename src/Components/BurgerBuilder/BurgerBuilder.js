import React, { Component } from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Header from '../Header/Header';

const price ={
  meat:2.1,
  bacon:3,
  salad:1,
  cheese:1.5
}

class BurgerBuilder extends Component{
  state={
    ingrediants:{
      meat:0,
      bacon:0,
      salad:0,
      cheese:0
    },
    priceTotal:4
  }

  
  incrementPrice = (type)=>{
    const prevPrice=price[type];
    let prevQuan=this.state.ingrediants[type];
    let UpdatedQuan={
      ...this.state.ingrediants
    }
    let prevPT=this.state.priceTotal;
    prevPT=prevPT + prevPrice;
    prevQuan=prevQuan+1;
    UpdatedQuan[type]=prevQuan;
    this.setState({
      ingrediants : UpdatedQuan,
      priceTotal : prevPT
    });
  }

  decrementPrice = (type)=>{
    const prevPrice=price[type];
    let prevQuan=this.state.ingrediants[type];
    let UpdatedQuan={
      ...this.state.ingrediants
    }
    let prevPT=this.state.priceTotal;
    prevPT=prevPT - prevPrice;
    prevQuan=prevQuan-1;
    UpdatedQuan[type]=prevQuan;
    this.setState({
      ingrediants : UpdatedQuan,
      priceTotal : prevPT
    });
  }
  
  render(){
    return(
      <Aux>
        <Header/>
        <BurgerSection ingrediants={this.state.ingrediants}/>
        <ManageSection price={this.state.priceTotal} type={this.state.ingrediants} less={this.decrementPrice} added={this.incrementPrice}/>
      </Aux>
    )
  }
} 

export default BurgerBuilder;