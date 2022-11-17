import React, { useContext, useState } from 'react';
import signupImage from '../../../Asset/img/signup.webp'
import { AuthContext } from '../../../Context/UserContext';

const Signup = () => {
    const [error, setError] = useState(null);
    const { a, createUser, updateUserProfile } = useContext(AuthContext);
    // console.log(a)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        // console.log(password)
        // const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
            })
            .catch(error => console.error(error));
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((e) => console.log(e.message))
    }
    return (
        <section style={{ backgroundColor: "" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="text-black" style={{ borderRadius: "25px;" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text"
                                                        name="name" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">

                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" name="email" id="form3Example3c" className="form-control" />
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password"
                                                        name="password" id="form3Example4c" className="form-control" />
                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password"
                                                        name="repeatPassword" id="form3Example4cd" className="form-control" />
                                                    <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example4cd"
                                                        name="photoURL" className="form-control" />
                                                    <label className="form-label" for="form3Example4cd">Upload Profile Photo</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <button type="submit" className="w-100 mx-4 mb-3 mb-lg-4 btn btn-primary ">Signup</button>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img alt="Sample image" src={signupImage}
                                            className="img-fluid" />

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