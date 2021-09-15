import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Create from './views/Create';
import AllProducts from './views/AllProducts';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import SingleProduct from './views/SingleProduct';
import Edit from './views/Edit';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div class name="header">
        <Link to ="/api/product/new">Add a new product</Link>
        <Link to ="/">All Products</Link>
      
        </div>
        <Switch>
          <Route exact path="/">
            <AllProducts />
          </Route>

          <Route exact path ="/api/product/new">
            <Create />
          </Route>

          <Route exact path ="/product/:_id">
            <SingleProduct />
          </Route>

          <Route exact path ="/product/update/:_id">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
