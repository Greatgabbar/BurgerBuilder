import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../BurgerBuilder/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../BurgerBuilder/Spinners/Spinner'


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adddress: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  clickHandle = () => {
    this.setState({ loading: true });

    const order = {
      ingrediants: this.props.ingrediants,
      totalPrice: this.props.price,
      contact: {
        name: "Shubham Trivedi",
        email: "shubham072001@gmail.com",
        address: "House no. 272A Gali no. 1 Shastri Colony Faridabad",
      }
    };
    axios.post('/orders.json', order)
      .then((data) => {
        console.log(data);
        this.setState({ loading: true });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: true });
      })
  }

  render() {
    let form = (
      <form >
        <input type="text" name="name" placeholder="Enter Your Name" />
        <input type="email" name="email" placeholder="Enter Your Email" />
        <input type="text" name="street" placeholder="Enter Street" />
        <input type="text" name="code" placeholder="Enter Postal Code" />
        <Button click={this.clickHandle} btnType="Success">Order</Button>
      </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    )
  }




}

export default ContactData