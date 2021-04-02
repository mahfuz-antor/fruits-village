import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {

    const [detail, setDetail] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    console.log(detail);
    console.log(setLoggedInUser);

    return (
        <div className="container">
            <Header></Header>
            {
                detail.length === 0 &&
                <div style={{marginLeft:'50%'}} class="spinner-border text-primary justify-content-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }
            <h3>You have ordered: {detail.length}</h3>
            
            {
                detail.map(order => <div> <strong> Fruit :: {order.product.name} --- </strong>  Name: {order.name} ---  Email:{order.email} </div>)
            }
        </div>
    );
};

export default Orders;