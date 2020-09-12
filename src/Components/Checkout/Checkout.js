import React,{Component} from 'react'
import Check from "./CheckoutSummary/CheckoutSummary"
import Aux from '../HOC/Aux/Aux';

class Checkout extends Component{
  state={
    ingrediants : {
      meat :1,
      bacon :1,
      salad :1,
      cheese : 1
    }
  }
  
  render(){
    return(
      <Aux>
        <Check ingrediants={this.state.ingrediants} /> 
      </Aux>
    )
  }
}

export default Checkout;