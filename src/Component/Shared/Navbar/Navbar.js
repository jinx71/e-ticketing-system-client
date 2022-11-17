import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Navbar = () => {
    const { user, signout } = useContext(AuthContext)
    return (
        <div>
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">Issue Resolver</Link>
                    <div className='d-flex justify-content-around align-items-center'>

                        {
                            user && user.uid ?
                                <>

                                    <img className='img-thumbnail me-2 rounded-circle' src={user.photoURL} style={{ width: "50px", height: "50px" }} alt="" referrerpolicy="no-referrer" />
                                    <Link className='mb-0 me-2  btn btn-primary'>{user.displayName}</Link>
                                    <Link to="/" onClick={signout} className="btn me-2 btn-primary">Logout</Link>
                                </>
                                :
                                <Link to="/login" className="btn me-2 btn-primary">Login</Link>
                        }
                        <Link to="/signup" className=" btn btn-primary">Sign Up</Link>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;