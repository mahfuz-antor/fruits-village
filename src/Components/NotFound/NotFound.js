import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <h1>Sorry, page not found</h1>
            <h3 className="text-danger">404 Error!!!</h3>
            <Link className="bg-primary text-white" to="/">Click here to go home page</Link>
        </div>
    );
};

export default NotFound;