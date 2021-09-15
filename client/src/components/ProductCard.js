import React, {useState} from "react";
import axios from "axios";
import AllProducts from "../views/AllProducts";
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
    const {title, price, description} = props.data;
    const [view, setView] = useState();

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
        .then(res => {
            console.log(res);
            props.setLoaded(prevState => ! prevState);
        })
        .catch(err => console.log(err));
    }

    const onViewHandler = (_id) => {
        console.log(_id);

        axios.get("http://localhost:8000/api/product"+_id)
        .then(res => {
            console.log(res);
            // props.setView(true);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className = "productCard">
            <h3><Link to = {`/product/${props.data._id}`}>{title}</Link></h3>
            <h3>${price}</h3>
            <h3>{description}</h3>
            <button className="delete" onClick = {() => onDeleteHandler(props.data._id)}>x</button>
        </div>
    )
}

export default ProductCard;