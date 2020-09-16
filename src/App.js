import React from 'react';
import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Layout/Layout';
import Checkout from './Components/Checkout/Checkout';
import { Route, Switch } from 'react-router'
import Orders from './Components/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
