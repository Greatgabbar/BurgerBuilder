import React, { Component } from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Modal from './Modal/Modal';
import axios from '../../axios-order';
import OrderSummary from './ManageSection/List/OrderSummary/OrderSummary';
import Spinner from './Spinners/Spinner';
import ErrHandle from '../HOC/ErrModal/ErrModal';


const price = {
  meat: 2.1,
  bacon: 3,
  salad: 1,
  cheese: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingrediants: null,
    priceTotal: 4,
    purchasing: true,
    checkout: false,
    loading: false,
    error : null
  }

  componentDidMount() {
    axios.get('/ingrediants.json')
      .then((data) => {
        console.log(data)
        this.setState({ ingrediants: data.data });
      })
      .catch((err) => {
        this.setState({error : true})
      })
  }

  incrementPrice = (type) => {
    const prevPrice = price[type];
    let prevQuan = this.state.ingrediants[type];
    let UpdatedQuan = {
      ...this.state.ingrediants
    }
    let prevPT = this.state.priceTotal;
    prevPT = prevPT + prevPrice;
    prevQuan = prevQuan + 1;
    UpdatedQuan[type] = prevQuan;
    let disabled = this.purchasing(prevPT);
    this.setState({
      ingrediants: UpdatedQuan,
      priceTotal: prevPT,
      purchasing: disabled
    });
  }


  decrementPrice = (type) => {
    const prevPrice = price[type];
    let prevQuan = this.state.ingrediants[type];
    let UpdatedQuan = {
      ...this.state.ingrediants
    }
    let prevPT = this.state.priceTotal;
    prevPT = prevPT - prevPrice;
    prevQuan = prevQuan - 1;
    UpdatedQuan[type] = prevQuan;
    let disabled = this.purchasing(prevPT);
    this.setState({
      ingrediants: UpdatedQuan,
      priceTotal: prevPT,
      purchasing: disabled
    });
  }

  purchasing = (price) => {
    if (price <= 4) {
      return true;
    } else {
      return false;
    }
  }

  onConfirm = () => {
    // this.setState({ loading: true })
    // const order = {
    //   ingrediants: this.state.ingrediants,
    //   totalPrice: this.state.priceTotal,
    //   contact: {
    //     name: "Shubham Trivedi",
    //     email: "shubham072001@gmail.com",
    //     address: "House no. 272A Gali no. 1 Shastri Colony Faridabad",
    //   }
    // };
    // axios.post('/orders.json', order)
    //   .then((data) => {
    //     this.setState({ loading: true, checkout: false });
    //   })
    //   .catch((err) => {
    //     this.setState({ loading: true, checkout: false });
    //   })

    const queryString = [];  //creatig an empty vriable

    for(let i in this.state.ingrediants){   // looping thorugh the ingrediants object
      let str = encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingrediants[i]);  //encoding the key and values
      queryString.push(str);       // pusing into the array
    }
    queryString.push('price='+this.state.priceTotal);
    const qy=queryString.join('&');  //joing every parameter in aaray with &
    this.props.history.push({
      pathname : "/checkout",
      search : "&" + qy //passing the generated quesru string in search parameter
    });
  }

  checkouting = () => {
    let lol = this.state.checkout;
    lol = true;
    this.setState({ checkout: lol });
  }
  rcheckouting = () => {
    this.setState({ checkout: false });
  }

  render() {
    let disabledInfo = {
      ...this.state.ingrediants
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orders;
    if (this.state.loading) {
      orders = <Spinner />
    }
    let burger = (this.state.error ? <p>Ingrediants Not Loaded Try Again :)</p> :<Spinner />);
    if (this.state.ingrediants) {
      orders = <OrderSummary type={this.state.ingrediants} price={this.state.priceTotal} cancel={this.rcheckouting} confirm={this.onConfirm} />
      burger = (
        <Aux>
          <BurgerSection ingrediants={this.state.ingrediants} />
          <ManageSection price={this.state.priceTotal} disable={disabledInfo} type={this.state.ingrediants} less={this.decrementPrice} added={this.incrementPrice} purchasing={this.state.purchasing} click={this.checkouting} />
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal show={this.state.checkout} click={this.rcheckouting}>
          {orders}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default ErrHandle(BurgerBuilder, axios);