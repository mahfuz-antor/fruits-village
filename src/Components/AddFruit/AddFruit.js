import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddFruit = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        };
        const url = `http://localhost:5000/addFruit`
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
        imageData.set('key','47b2d957da970efd46650889d3040352');
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
            {/* <Header></Header> */}
            <h1>This is AddFruit page.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Add Your Fruit" ref={register} />
                <br/>
                <input name="price" defaultValue="Add Your Price" ref={register} />

                <br/>
                <input type="file" name="exampleRequired" onChange={handleImageUpload} />
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddFruit;