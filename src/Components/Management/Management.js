import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteFruit from '../DeleteFruit/DeleteFruit';
import Header from '../Header/Header';

const Management = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);

    return (
        <div classNameName="container">
            <Header></Header>

            <div className="row mt-4">
                <div className="col-sm-4">
                    <div style={{ marginLeft: '100px' }} className="card">
                        <div className="card-body">
                            <h2 className="card-title">Fruits Village</h2>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                            <Link to="/management">Manage Product</Link><br />
                            <Link to="/addFruit">Add Product</Link><br />
                            <Link to="/admin">Edit Product</Link><br />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div style={{ width: '800px' }} className="card">
                        <div className="card-body">

                            {
                                events.map(event => <DeleteFruit event={event}></DeleteFruit>)
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Management;