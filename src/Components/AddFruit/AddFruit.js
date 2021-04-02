import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddFruit = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        };
        const url = `https://glacial-anchorage-30312.herokuapp.com/addFruit`
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side res', res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '47b2d957da970efd46650889d3040352');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="container">
            <Header></Header>


            <div className="row m-3">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Fruits Village</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            <Link to="/management">Manage Product</Link><br />
                            <Link to="/addFruit">Add Product</Link><br />
                            <Link to="/admin">Edit Product</Link><br />
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="card">
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3>Add Your Fruit Details Here</h3>
                                <input name="name" defaultValue="Fruit Name" ref={register} />
                                <br />
                                <input name="price" defaultValue="Fruit Price" ref={register} />

                                <br />
                                <input type="file" name="exampleRequired" onChange={handleImageUpload} />

                                <br />
                                <input className="btn btn-primary text-white" type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddFruit;