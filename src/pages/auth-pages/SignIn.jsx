/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Link } from "react-router-dom";
import tsalogo from "@assets/TSA logo.svg";
import lineIcon from "@assets/lineIcon.svg";
import twitter from "@assets/twitter.svg";
import facebook from "@assets/facebook.svg";
import google from "@assets/google.svg";
import signinVector from "@assets/Vector photo sign in.svg";
import "./scss/SignIn.scss";
import { useState } from "react";
import ShowEye from "@components/ShowEye";


const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="sign-in gap-5 d-flex position-relative ">
      <div
       style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        width: "100%"
      }}

      className="sign-in-frame-1 bg-primary border border-primary d-none d-lg-flex align-items-center w-50">
        <div

        className="img-sign-in container d-flex flex-column justify-content-center align-items-center gap-5 p-1 ">
          <Link to={"/"}>
            <img className="position-absolute tsa-logo " src={tsalogo} alt="" />
          </Link>

          <img
            className="img-vector img-fluid mb-5 pb-5 "
            src={signinVector}
            alt=""

            style={{
                width: "70%"
            }}
                  />
        </div>
      </div>

      <div className="sign-in-section  d-sm-flex p-5 my-5 mx-auto rounded-3 align-items-center">
        <section className="section-for-signin mb-5">
          <div className=" w-100"></div>
          <div className="sign-in-content-padding">
            <div className="mb-4">
              <h3 className="fw-bold">Welcome Back</h3>
              <p>Let's Help You Get Into Your Account.</p>
            </div>
            <form action="">
              <div className="d-flex flex-column gap-1 mb-3">
                <label className="fw-bold" htmlFor="email">
                  Email Address
                </label>

                <input
                  className="p-2 rounded border-1"
                  name="email"
                  type="text"
                  id="email"
                />
              </div>

              <div className="d-flex flex-column gap-1 mb-3">
                <label className="fw-bold" htmlFor="password">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    className="w-100 p-2 rounded border-1"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                  />

                  <ShowEye
                    eyeState={passwordVisible}
                    updateEye={setPasswordVisible}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              <Link className="text-decoration-none mb-5">
                Forgot Password?
              </Link>

              <button className="btn btn-primary mb-4 mt-3 p-2 w-100 fs-5">
                Login
              </button>

              <div className="d-flex gap-2 justify-content-center">
                <p className="text-center">Already have an account?</p>
                <Link to={"/signup"} className="text-decoration-none">
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
  );
};

export default SignIn;
