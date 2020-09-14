import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../BurgerBuilder/Button/Button'

class ContactData extends Component{
  state={
    name:'',
    email : '',
    adddress : {
      street : '',
      postalCode :''
    }
  }
render(){
  return(
    <div className={classes.ContactData}>
      <h4>Enter Your Contact Data</h4>
      <form>
        <input type="text" name = "name" placeholder="Enter Your Name" />
        <input type="email" name = "email" placeholder="Enter Your Email" />
        <input type="text" name = "street" placeholder="Enter Street" />
        <input type="text" name = "code" placeholder="Enter Postal Code" />
        <Button btnType="Success">Order</Button>
      </form>
    </div>
  )
}




}

export default ContactData