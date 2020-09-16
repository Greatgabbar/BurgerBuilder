import React, { Component } from 'react'
import Order from './Order/Order'
import axios from '../../axios-order'
import ErrModal from '../HOC/ErrModal/ErrModal'
import Spinner from '../BurgerBuilder/Spinners/Spinner'


class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('orders.json')
      .then((res) => {
        const fOrders = [];
        for (let key in res.data) {
          fOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ orders :fOrders,loading: false })
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      })
  }

  render() {
    let orders = this.state.orders.map((data)=>{
      console.log(data);
     return <Order order={data.ingrediants} price={data.totalPrice} key={data.id} />
    }
    ) 


    if(this.state.loading){
      orders=(<Spinner />);
    }

    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default ErrModal(Orders, axios);