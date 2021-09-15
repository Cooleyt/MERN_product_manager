import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = (props) =>{
    const [products, setProducts] = useState({});
    const { _id } = useParams();

    useEffect(()=>{
        console.log(_id);
        axios.get("http://localhost:8000/api/product/" +_id)
        .then(res => setProducts(res.data.results))
        .catch(err => console.log(err))
    }, [_id])

    return(
        <div><h2>Single Product Page</h2>
            <ProductCard data={products} />
            <Link to={`/product/update/${_id}`} className="btn btn-lg btn-warning">Edit</Link>
        </div>
    )
}

export default SingleProduct;