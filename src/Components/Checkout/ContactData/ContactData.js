import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../BurgerBuilder/Button/Button'
import axios from '../../../axios-order'
import Spinner from '../../BurgerBuilder/Spinners/Spinner'
import Input from '../../BurgerBuilder/Input/Input'


class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        type: 'input',
        config: {
          name: "name",
          placeholder: "Enter Name",
          type: "text"
        },
        value: '',
        valid: false,
        validation: {
          required: true,
          minLength: 4
        },
        touch: false
      },
      email: {
        type: 'input',
        config: {
          name: "email",
          placeholder: "Enter Email",
          type: "email"
        },
        value: '',
        valid: false,
        validation: {
          required: true
        },
        touch: false
      },
      address: {
        type: 'input',
        config: {
          name: "address",
          placeholder: "Enter Address",
          type: "text"
        },
        value: '',
        valid: false,
        validation: {
          required: true
        },
        touch: false
      },
      pincode: {
        type: 'input',
        config: {
          name: "pincode",
          placeholder: "Enter Pincode",
          type: "number"
        },
        value: '',
        valid: false,
        validation: {
          required: true
        },
        touch: false
      },
      country: {
        type: 'input',
        config: {
          name: "country",
          placeholder: "Enter country",
          type: "text"
        },
        value: '',
        valid: false,
        validation: {
          required: true
        },
        touch: false
      },
      delivery: {
        type: 'checkbox',
        config: {
          name: "delivery",
          option: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'standard', displayValue: 'Standard' }
          ]
        },
        value: '',
        valid :true
      }
    },
    loading: false,
    formValid : false
  }

  clickHandle = () => {
    this.setState({ loading: true });
    const order = {};
    for (let i in this.state.orderForm) {
      order[i] = this.state.orderForm[i].value
    }
    // console.log(order);
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

  validationCheck = (prop, value) => {
    let valid = true;
    if (prop.required) {
      valid = value.trim() !== '' && valid;
    }
    if (prop.minLength) {
      valid = value.length >= prop.minLength && valid;
    }
    return valid;
  }

  changeHandle = (e, element) => {
    //  here we want a the value props so to get we have to deeply copy the state because in state the value is in orederForm then the specified field like name,email etc and then we get specific field value so we have to first get the params that we are changing

    const updatedForm = {
      ...this.state.orderForm
    }

    // now we have to get the properties of specific Field
    const fieldVal = {
      ...updatedForm[element]
    }

    fieldVal.value = e.target.value;
    if (fieldVal.validation)
      fieldVal.valid = this.validationCheck(fieldVal.validation, fieldVal.value);
    updatedForm[element] = fieldVal;
    updatedForm[element].touch = true;
    let formValid=true;
    for(let i in updatedForm){
      formValid = updatedForm[i].valid && formValid;
    }
    this.setState({ orderForm: updatedForm ,formValid:formValid });
  }

  render() {
    const formEle = [];
    for (let i in this.state.orderForm) {
      formEle.push({
        ...this.state.orderForm[i],
        id: i
      })
    }


    let form = formEle.map((data) => {
      return <Input {...data} key={data.id} touch={data.touch} invalid={!data.valid} shouldValid={data.validation} change={(e) => this.changeHandle(e, data.id)} />
    })

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
        <Button btnType="Success" disable={!this.state.formValid} click={this.clickHandle}>Order Now</Button>
      </div>
    )
  }
}

export default ContactData