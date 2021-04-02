import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const Fruits = ({event}) => {
    const history = useHistory()

    // const handleCheckout = () =>{
    //     history.push('/fruitDetail');
    //     console.log(event._id);
    //     // fetch(`fruitDetail/${event._id}`)
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     console.log(data);
    //     // })
    // }
    console.log(event);

    return (
        <div className="bg-light rounded m-3 p-2 border border-secondary">
            <div className="col-md-12">
                <img style={{height: '200px'}} src={event.imageURL} alt=""/>
                <h5>{event.name}</h5>
                <h5></h5>
                {/* <h5>{event._id}</h5> */}
                <p>Price: ${event.price} <button> <Link to={"/orderDetails/"+event._id}>Buy Now</Link> </button> </p>
                
            </div>
        </div>
    );
};

export default Fruits;