import React from 'react';
import { useHistory } from 'react-router';


const Fruits = ({event}) => {
    const history = useHistory()

    const handleCheckout = () =>{
        history.push('/shipment');
    }

    return (
        <div className="bg-light rounded m-3 p-2 border border-secondary">
            <div className="col-md-12">
                <img style={{height: '200px'}} src={event.imageURL} alt=""/>
                <h5>{event.name}</h5>
                <p>Price: $ 45 <button onClick={handleCheckout}>Buy Now</button></p>
                
            </div>
        </div>
    );
};

export default Fruits;