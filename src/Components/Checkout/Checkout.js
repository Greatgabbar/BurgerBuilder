import React,{Component} from 'react'
import Check from "./CheckoutSummary/CheckoutSummary"
import Aux from '../HOC/Aux/Aux';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
  state={
    ingrediants : {
      bacon :0,
      cheese : 0,
      meat :0,
      salad :0
    }
  }

  componentDidMount=()=>{
    console.log(this.props); 
    const queryStr = new URLSearchParams(this.props.location.search);
    const ing={};
    queryStr.forEach((value,key)=>{
      ing[key] = +value;
    })
    // for(let i of  queryStr.entries()){
    //   ing[i[0]] = +i[1]
    // }
    console.log(ing);
    this.setState({ingrediants : ing});
    console.log(this.state.ingrediants); 
  }

  checkoutContinue=()=>{
    console.log(this.props)
    this.props.history.replace('/checkout/form');
  }
  checkoutCancel = () => {
    this.props.history.goBack();
  }
  
  render(){
    return(
      <Aux>
        <Check continue={this.checkoutContinue} cancel={this.checkoutCancel} ingrediants={this.state.ingrediants} /> 
        <Route path={this.props.match.path + '/form'} component={ContactData} />
      </Aux>
    )
  }
}

export default Checkout;