import React from 'react';
import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Layout/Layout';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
     <Layout>
       <BurgerBuilder />
       <Checkout />
     </Layout>
    </div>
  );
}

export default App;
