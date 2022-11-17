import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">Issue Resolver</Link>
                    <div>
                        <Link to="/signup" className="me-1 btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;