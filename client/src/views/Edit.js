import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Edit = (props) => {
    const{_id} = useParams();
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const [form, setForm] = useState({
        title: "",
        price: "",
        description:""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/product/update/${_id}`, form)
        .then(res =>{
            console.log(res);
            console.log(res.data);

            if(res.data.result){
                history.push('/');
            }
            else{
                setErrors(res.data.err.errors);
            }
        })
        .catch(err => console.log(err))
    }
    

    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" +_id)
        .then(res => setForm(res.data.results))
        .catch(err => console.log(err))
    },[_id])

    return (
        <div className="w-50 mx-auto p-3">
            <form onSubmit = {onSubmitHandler}>
                <h1>Edit</h1>
                <div className="form-group">
                    <input name="title" value={form.title} className="form-control" type="text" placeholder="title name" onChange={onChangeHandler} />
                    <span className = "alert-danger">{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group">
                    <input name="price" value={form.price} className="form-control" type="number" placeholder="price" onChange={onChangeHandler} />
                    <span className = "alert-danger">{errors.price && errors.price.message}</span>
                </div>

                <div className="form-group">
                    <input name="description" value={form.description} className="form-control" type="text" placeholder="description" onChange={onChangeHandler} />
                    <span className = "alert-danger">{errors.description && errors.description.message}</span>
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Edit;