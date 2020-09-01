import React, { Component } from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Modal from './Modal/Modal';
import OrderSummary from './ManageSection/List/OrderSummary/OrderSummary';

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
    priceTotal:4,
    purchasing : true,
    checkout : false
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
    let disabled=this.purchasing(prevPT);
    this.setState({
      ingrediants : UpdatedQuan,
      priceTotal : prevPT,
      purchasing : disabled
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
    let disabled=this.purchasing(prevPT);
    this.setState({
      ingrediants : UpdatedQuan,
      priceTotal : prevPT,
      purchasing : disabled
    });
  }

  purchasing=(price)=>{
    if(price<=4){
      return true;
    }else{
      return false;
    }
  }
  
  onConfirm=()=>{
    alert('You clicked on Continue :)');
  }

  checkouting=()=>{
    let lol=this.state.checkout;
    lol=true;
    this.setState({checkout : lol});
  }
  rcheckouting=()=>{
    this.setState({checkout:false});
  }

  render(){
    let disabledInfo={
      ...this.state.ingrediants
    }
    for(let key in disabledInfo){
      disabledInfo[key]=disabledInfo[key] <=0;
    }
    return(
      <Aux>
        <Modal show={this.state.checkout} click={this.rcheckouting}>
          <OrderSummary type={this.state.ingrediants} price={this.state.priceTotal} cancel={this.rcheckouting} confirm={this.onConfirm} />
        </Modal>
        <BurgerSection ingrediants={this.state.ingrediants}/>
        <ManageSection price={this.state.priceTotal} disable={disabledInfo} type={this.state.ingrediants} less={this.decrementPrice} added={this.incrementPrice} purchasing={this.state.purchasing} click={this.checkouting}/>
      </Aux>
    )
  }
} 

export default BurgerBuilder;