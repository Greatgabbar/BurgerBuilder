import React,{Component} from 'react'
import Check from "./CheckoutSummary/CheckoutSummary"
import Aux from '../HOC/Aux/Aux';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
  state={
    ingrediants :null,
    priceTotal : null
  }

  componentWillMount=()=>{
    console.log(this.props); 
    const queryStr = new URLSearchParams(this.props.location.search);
    const ing={};
    queryStr.forEach((value,key)=>{
      if(key==='price'){
        this.setState({priceTotal : +value});
      }else{
        ing[key] = +value;
      }
    })
    // for(let i of  queryStr.entries()){   //obj.entries to get key and value
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
        <Route path={this.props.match.path + '/form'} render={(props)=>
          <ContactData history={this.props.history} ingrediants={this.state.ingrediants} price={this.state.priceTotal} />
        } />
      </Aux>
    )
  }
}

export default Checkout;