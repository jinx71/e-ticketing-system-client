import React, { useContext, useState } from 'react';
import loginImage from '../../../Asset/img/login.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Signup = () => {
    const { user, signin, handleGoogleSignIn } = useContext(AuthContext);
    // console.log(user.displayName)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            });
    }
    const GoogleSignInButtonClick = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            });
    }
    return (
        <section style={{ backgroundColor: "" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="text-black" style={{ borderRadius: "25px;" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">

                                        <img alt="Sample image" src={loginImage}
                                            className="img-fluid" />

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                            {/* <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div> */}

                                            <div className="d-flex flex-row align-items-center mb-4">

                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c"
                                                        name="email" className="form-control" />
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c"
                                                        name="password" className="form-control" />
                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            {/* <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" />
                                                    <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div> */}

                                            {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div> */}


                                            <button type="submit" className="mx-auto mb-3 mb-lg-4 btn btn-primary w-100">Login</button>

                                            <button type="button" onClick={GoogleSignInButtonClick} className="mx-auto mb-3 mb-lg-4 btn btn-primary w-100">Login With Google</button>

                                        </form>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;