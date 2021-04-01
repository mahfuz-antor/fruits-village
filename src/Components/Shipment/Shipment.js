import React from 'react';
import Header from '../Header/Header';

const Shipment = ({event}) => {
    console.log(event);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        // console.log('click succcess');
    }

    return (
        <div className="container">
            {/* <Header></Header> */}
            {/* <h1>Name: {event.name}  Price: {event.price}</h1> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{event.name} ---</th>
                        <th scope="col">{event.price}  -----</th>
                        <th scope="col"><button onClick={() => handleDelete (event._id)}>Delete</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Shipment;