import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const Fruits = ({ event }) => {
    const history = useHistory()


    console.log(event);

    return (
        <div className="bg-light rounded m-3 p-2 border border-secondary shadow">
            <div className="col-md-12">
                <img style={{ height: '200px' }} src={event.imageURL} alt="" />
                <h5>{event.name}</h5>

                <p>Price: ${event.price} <button className="btn btn-primary"> <Link className=" text-white" to={"/orderDetails/" + event._id}>Buy Now</Link> </button> </p>

            </div>
        </div>
    );
};

export default Fruits;