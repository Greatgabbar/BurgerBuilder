import React, { Component } from 'react';
import BurgerSection from './BurgerSection/BurgerSection';
import ManageSection from './ManageSection/ManageSection';
import Aux from '../HOC/Aux/Aux'
import Modal from './Modal/Modal';
import axios from '../../axios-order';
import OrderSummary from './ManageSection/List/OrderSummary/OrderSummary';
import Spinner from './Spinners/Spinner';
import ErrHandle from '../HOC/ErrModal/ErrModal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action'


class BurgerBuilder extends Component {
  state = {
    checkout: false,
    loading: false,
    error: null
  }

  componentDidMount() {
    // axios.get('/ingrediants.json')
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({ ingrediants: data.data });
    //   })
    //   .catch((err) => {
    //     this.setState({error : true})
    //   })
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

    // const queryString = [];  //creatig an empty vriable

    // for (let i in this.props.ing) {   // looping thorugh the ingrediants object
    //   let str = encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ing[i]);  //encoding the key and values
    //   queryString.push(str);       // pusing into the array
    // }
    // queryString.push('price=' + this.state.priceTotal);
    // const qy = queryString.join('&');  //joing every parameter in aaray with &
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "&" + qy //passing the generated quesru string in search parameter
    // });
    this.props.history.push("/checkout");
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
      ...this.props.ing
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orders;
    if (this.state.loading) {
      orders = <Spinner />
    }
    let burger = (this.state.error ? <p>Ingrediants Not Loaded Try Again :)</p> : <Spinner />);
    if (this.props.ing) {
      orders = <OrderSummary type={this.props.ing} price={this.props.price} cancel={this.rcheckouting} confirm={this.onConfirm} />
      burger = (
        <Aux>
          <BurgerSection ingrediants={this.props.ing} />
          <ManageSection
            price={this.props.price}
            disable={disabledInfo}
            type={this.props.ing}
            less={this.props.onIngredientRemove}
            added={this.props.onIngredientAdd}
            purchasing={this.props.purchasing}
            click={this.checkouting} />
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

const mapsStateToProps = (state) => {
  return {
    ing: state.ingrediants,
    price: state.priceTotal,
    purchasing : state.purchasing
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    onIngredientAdd: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemove: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ErrHandle(BurgerBuilder, axios));