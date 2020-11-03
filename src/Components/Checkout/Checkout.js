import React,{Component} from 'react'
import Check from "./CheckoutSummary/CheckoutSummary"
import Aux from '../HOC/Aux/Aux';
import { Route } from 'react-router';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component{
  // componentWillMount=()=>{
  //   console.log(this.props); 
  //   const queryStr = new URLSearchParams(this.props.location.search);
  //   const ing={};
  //   queryStr.forEach((value,key)=>{
  //     if(key==='price'){
  //       this.setState({priceTotal : +value});
  //     }else{
  //       ing[key] = +value;
  //     }
  //   })
  //   // for(let i of  queryStr.entries()){   //obj.entries to get key and value
  //   //   ing[i[0]] = +i[1]
  //   // }
  //   // console.log(ing);
  //   // this.setState({ingrediants : ing});
  //   // console.log(this.state.ingrediants); 
  // }

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
        <Check continue={this.checkoutContinue} cancel={this.checkoutCancel} ingrediants={this.props.ing} /> 
        <Route path={this.props.match.path + '/form'} component={ContactData}/>
      </Aux>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    ing : state.ingrediants,
    price : state.priceTotal
  }
}

export default connect(mapStateToProps)(Checkout);