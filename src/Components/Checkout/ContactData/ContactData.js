import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../BurgerBuilder/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../BurgerBuilder/Spinners/Spinner'
import Input from '../../BurgerBuilder/Input/Input'


class ContactData extends Component {
  state = {
    orderForm:{
      name:{
        type: 'input',
        config:{
          name : "name",
          placeholder:"Enter Name",
          type : "text"
        },
        value : ''
      },
      email:{
        type: 'input',
        config:{
          name : "email",
          placeholder:"Enter Email",
          type : "email"
        },
        value : ''
      },
      address:{
        type: 'input',
        config:{
          name : "address",
          placeholder:"Enter Address",
          type : "text"
        },
        value : ''
      },
      pincode:{
        type: 'input',
        config:{
          name : "pincode",
          placeholder:"Enter Pincode",
          type : "number"
        },
        value : ''
      },
      country:{
        type: 'input',
        config:{
          name : "country",
          placeholder:"Enter country",
          type : "text"
        },
        value : ''
      },
      delivery:{
        type: 'input',
        config:{
          name : "delivery",
          option :[
            {value : 'fastest',displayValue : 'Fastest'},
            {value : 'standerd',displayValue : 'Standerd'}
        ],
          placeholder : 'Enter Delivery Type'
        },
        value : ''
      }
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
const formEle=[];
    for(let i in this.state.orderForm){
      formEle.push({
        ...this.state.orderForm[i],
        id : i
      })
    }


    let form = formEle.map((data)=>{
      return <Input {...data} key={data.id}  />
    })

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