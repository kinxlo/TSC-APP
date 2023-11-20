// import React from 'react'
import { Link } from "react-router-dom";
import tsalogo from "../assets/TSA logo.svg";
import lineIcon from "../assets/lineIcon.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import signinVector from "../assets/Vector photo sign in.svg";
import '../styles/SignIn.scss'

const SignIn = () => {
  return (
    <div className="sign-in-main container">
      <div className="sign-in container gap-5 d-flex position-relative ">
        <div className="sign-in-frame-1 bg-primary border border-primary d-none d-lg-flex align-items-center ps-3 pe-3 position-sticky">
          <div className="container d-flex flex-column justify-content-center align-items-center gap-5 ">
            <img className="mb-5 pb-5 w-25 mt-4" src={tsalogo} alt="" />

            <img
              className="img-vector img-fluid w-75 mb-5 pb-5 "
              src={signinVector}
              alt=""
            />
            <div className="sign-up-container w-"></div>
          </div>
        </div>

        <div className="sign-in-section d-flex bg-light border p-4 rounded-3 mt-3 mb-3 align-items-center">
          <section className="section-for-signin">
            <div className=" w-100"></div>
            <div className="sign-in-content-padding">
              <div className="mb-4">
                <h3 className="fw-bold">Welcome Back!</h3>
                <p>Let's Help You Get Into Your Account.</p>
              </div>
              <form action="">
                <div className="d-flex flex-column gap-1 mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input className="p-1" name="email" type="text" id="email" />
                </div>

                <div className="d-flex flex-column gap-1 mb-1">
                  <label htmlFor="password">Password</label>
                  <div>
                    <input
                      className="w-100 p-1"
                      name="password"
                      type="text"
                      id="password"
                    />
                  </div>
                </div>

                <Link className="text-decoration-none mb-5">
                  Forgot Password?
                </Link>

                <button className="btn btn-primary d-block mt-4 mb-4 w-100">
                  Login
                </button>

                <div className="d-flex gap-2 justify-content-center">
                  <p className="text-center">Already have an account?</p>
                  <Link to={"/signin"} className="text-decoration-none">
                    Register
                  </Link>
                </div>
              </form>

              <div className="d-flex gap-1 justify-content-center align-items-center mt-2 mb-4">
                <div>
                  <img src={lineIcon} alt="" />
                </div>
                <p className="fw-bold m-0">OR</p>
                <div>
                  <img src={lineIcon} alt="" />
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
