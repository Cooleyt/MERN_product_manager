import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data.results))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
            <h1>Products</h1>
      {
        products.map((item, i)=>{
          return <li key={i}>{item.title},{item.price} <i>{item.description}</i></li>
        })
      }
    </div>
  );
}

export default App;
