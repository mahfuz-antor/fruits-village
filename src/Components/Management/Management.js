import React from 'react';
import Header from '../Header/Header';

const Management = ({event}) => {
    // console.log(event);
    return (
        <div className="container">
            <h1>This is Management Page.</h1>
            <img style={{height: '200px'}} src={event.imageURL} alt=""/>
                <h5>{event.name}</h5>
        </div>
    );
};

export default Management;