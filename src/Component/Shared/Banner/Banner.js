import React from 'react';

const Banner = () => {
    return (
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Provide Great Supports To Your Clients With Our Ticketing System</h1>
                            {/* <!-- Signup form-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <form className="form-subscribe" id="contactForm">
                                {/* <!-- Email address input--> */}
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" />
                                        <div className="invalid-feedback text-white" >Email Address is required.</div>
                                        <div className="invalid-feedback text-white" >Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                {/* <!-- Submit success message--> */}
                                {/* <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>

                                    </div>
                                </div>
                                {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form--> */}
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;