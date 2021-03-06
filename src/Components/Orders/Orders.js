import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {

    const [detail, setDetail] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://glacial-anchorage-30312.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])

    console.log(detail);
    console.log(setLoggedInUser);

    return (
        <div className="container">
            <Header></Header>
            <div className="card m-5 bg-white shadow">
            <div className="bg-info m-5 p-3 text-white shadow">
            {
                detail.length === 0 &&
                <div style={{marginLeft:'50%'}} class="spinner-border text-primary justify-content-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }
            <h3>You have ordered: {detail.length} Fruits</h3>
            
            {
                detail.map(order => <div> <strong> Fruit :: {order.product.name} --- </strong>  Name:: {order.name} ---  Email:: {order.email} </div>)
            }
            </div>
            </div>
        </div>
    );
};

export default Orders;