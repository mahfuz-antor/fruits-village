import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary rounded">
            <div className="container-fluid text-info">
                <a className="navbar-brand  text-light" href="../home">Fruits Village</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login"> Login: </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;