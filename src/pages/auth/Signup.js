import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'


const Signup = () => {
    return (
        <>
        <Nav/>
        <div className="container mt-4 mb-3 ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3 ">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" className="form-control" id="firstname"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lasttname">LastName</label>
                            <input type="text" className="form-control" id="lastname"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword">Confir password</label>
                            <input type="password" className="form-control" id="cpassword"></input>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="btn btn-primary from-control">Sign Up</button>
                        </div>

                        <div className="mb-3">
                            Already have an account? &nbsp; <b><Link to="/signin" className="text-decoration-none">Sign In</Link></b>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer/>
            
        </>
    )
}

export default Signup
