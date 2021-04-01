import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Shipment from '../Shipment/Shipment';

const Management = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);
    // const name = events.find(ft => ft.name)
    // console.log(name);

    // console.log(event);

    // const names = events.map(tf => {
    //     return <li>{tf.name +' '+ tf.price} </li>
    // })
    // // const price = events.map(tf => {
    // //     return <p>{tf._id}</p> 
    // // })
    // console.log(names);
    return (
        <div className="container">
            <Header></Header>
            {
                events.map(event => <Shipment event={event}></Shipment>)
            }

        </div>
    );
};

export default Management;