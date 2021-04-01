import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Orders = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])
    
    console.log(detail);
    console.log(detail?.email);

    return (
        <div className="container">
            <Header></Header>
            {/* <h1>This is Order component. <Link to={"/"+ email}></Link></h1> */}
        </div>
    );
};

export default Orders;