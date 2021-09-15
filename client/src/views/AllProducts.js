import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const AllProducts = (props) =>{
    const [products, setProducts] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            setProducts(res.data.results);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [loaded])

    // onClickHandler((e, _id)=>{
    //     e.preventDefault();
    //     history.push(`product/${_id}`);
    // })

    return(
        <div className="d-flex justify-content-around align-items-center">
            {
                products.map((item, i)=>{
                    return <ProductCard key={i} data={item} setLoaded = {setLoaded} />
                })
            }
        </div>
    )
}

export default AllProducts;