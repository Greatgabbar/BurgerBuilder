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

  checkoutContinue=()=>{
    console.log(this.props)
    this.props.history.replace('/form');
  }
  checkoutCancel = () => {
    this.props.history.goBack();
  }
  
  render(){
    return(
      <Aux>
        <Check continue={this.checkoutContinue} cancel={this.checkoutCancel} ingrediants={this.state.ingrediants} /> 
      </Aux>
    )
  }
}

export default Checkout;