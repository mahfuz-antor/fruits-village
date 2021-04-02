import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Fruits from '../Fruits/Fruits'


const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="container">
            <Header></Header>
            {/* <h1>This is Home Page.</h1> */}

            <div className="row">
                {
                    events.length === 0 &&
                    <div class="spinner-border text-primary justify-content-center" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }
                {
                    events.map(event => <Fruits event={event}></Fruits>)
                }
            </div>
        </div>
    );
};

export default Home;