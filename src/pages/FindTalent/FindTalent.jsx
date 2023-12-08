import React, { useState } from "react";
import "./FindTalent.css";
import { Link, useNavigate } from "react-router-dom";

const FindTalent = () => {
  // =========================NAVBAR DROPDOWN LOGIC========================
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // =======================FORM 1 LOGIC===========================

  const navigate = useNavigate();

  const [formDataOne, setFormDataOne] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDataOne({
      ...formDataOne,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add the form submission logic here
    console.log("Form Submited:", formDataOne);
    // Reset the form after submission
    setFormDataOne({
      name: "",
      email: "",
    });

    navigate("/jobposting");
  };

  // ======================FORM 2 LOGIC=========================

  const [formDataTwo, setFormDtaTwo] = useState({
    name: "",
    companyName: "",
    companyEmail: "",
    role: "",
  });

  const handleChangeTwo = (event) => {
    const { name, value } = event.target;
    setFormDtaTwo({
      ...formDataTwo,
      [name]: value,
    });
  };

  const handleSubmitTwo = (event) => {
    event.preventDefault();
    // add form submission logic here
    console.log("Form Submitted:", formDataTwo);
    // Reset the form after submission
    setFormDtaTwo({
      name: "",
      companyName: "",
      companyEmail: "",
      role: "",
    });
  };

  // ======================SUBSCRIBE INPUT FOOTER=====================

  // const [email, setEmail] = useState({
  //   email: "",
  // });

  // const handleChangemail = (event) => {
  //   const { name, value } = event.target;
  //   setEmail({
  //     ...email,
  //     [name]: value,
  //   });
  // };

  // const handleSubmitemail = (event) => {
  //   event.preventDefault();
  //   // add form submission logic here
  //   console.log("Form Submitted:", email);
  //   // Reset the form after submission
  //   setEmail({
  //     email: "",
  //   });
  // };

  // ==========================JSX=================================================================

  return (
    <div className="body">
      {" "}
      {/* ============================================NAVBAR================================================= */}
      {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark"> */}
        {/* <div className="container d-flex align-items-center">
          <div className="logo">
            <Link to={`/home`}>
              <img
                src="../../../src/assets/TSA community 3.png"
                alt="techstudio logo"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="tabs d-lg-flex d-md-none d-sm-none d-none">
            <Link
              to={`/community`}
              className="m-0 text-decoration-none tabs-link"
            >
              Explore Community
            </Link>
            <Link
              to={`/find-talent`}
              className="m-0 text-decoration-none tabs-link"
            >
              Find Talent
            </Link>
            <Link to={`/foryou`} className="m-0 text-decoration-none tabs-link">
              For You
            </Link>
          </div>
          <div className="auth d-lg-flex d-md-none d-sm-none d-none">
            <Link to={`/signin`} className="auth-link">
              <button className="btn btn-primary">Register</button>
            </Link>
            <Link to={`/signup`} className="m-0 text-decoration-none auth-link">
              Login
            </Link>
          </div> */}

          {/* <!-- =============MQ NAVBAR================= --> */}

          {/* <div className="drop d-lg-none d-md-flex d-sm-flex">
            <i
              className="bi bi-list fs-1 text-white"
              onClick={toggleDropdown}
            ></i>
            <div
              className={`tabs profile-dropdown ${
                isDropdownOpen ? "active" : ""
              }`}
            >
              <div className="bluedrop border d-flex flex-column gap-2 align-items-center justify-content-center rounded-2 end-0">
                <Link
                  to={`/explorecommunity`}
                  className="m-0 text-decoration-none text-center tabs-link"
                >
                  Explore Community
                </Link>
                <Link
                  to={`/findtalent`}
                  className="m-0 text-decoration-none tabs-link"
                >
                  Find Talent
                </Link>
                <Link
                  to={`/foryou`}
                  className="m-0 text-decoration-none tabs-link"
                >
                  For You
                </Link>
                <Link to={`/register`}>
                  <button className="btn btn-primary auth-link">
                    Register
                  </button>
                </Link>
                <Link
                  to={`/login`}
                  className="log m-0 text-decoration-none auth-link"
                >
                  Login
                </Link>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </nav> */}
      {/* <!-- =======================================SEC 1====================================== --> */}
      <section>
        <div className="all-form">
          <div className="find">
            <p className="head">Find the best talents to grow your team</p>
            <p className="para">
              TechStudio is relied upon by a good amount of great companies for
              finding competent talents. We mold our talents to fit into their
              needed positions and your company culture.
            </p>
          </div>
          <div className="blue-form">
            <div className="dots">
              <img src="../../../src/assets/Group 1000002352.png" alt="dots" />
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="name"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formDataOne.name}
                  onChange={handleChange}
                />
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formDataOne.email}
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =======================================SEC 2====================================== --> */}
      <section>
        <div className="sec-2">
          <p className="m-0 head-2">How Techstudio works for employers</p>
          <div className="cards container">
            <div className="card-1">
              <img src="../../../src/assets/Illustration.png" alt="1-person" />
              <p className="post m-0">Post a Job</p>
              <p className="p1 m-0">
                Create an account and a befitting profile to attract job offers
                with ease. Your profile shows employers what makes you
              </p>
            </div>
            <div className="card-2">
              <img
                src="../../../src/assets/Illustration 1.png"
                alt="3-people"
              />
              <p className="rev m-0">Review & Shortlist</p>
              <p className="p2 m-0">
                Create a position on Hired and specify the skills and experience
                you're looking for
              </p>
            </div>
            <div className="card-3">
              <img
                src="../../../src/assets/Illustration 2.png"
                alt="2-people"
              />
              <p className="inter m-0">Interview & Hire</p>
              <p className="p3 m-0">
                Create an account and a befitting profile to attract job offers
                with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =======================================SEC 3====================================== --> */}
      <section className="roles">
        <p className="hire m-0">Hire to fill the most in-demand roles</p>
        <div className="icons">
          <div className="set-1 container">
            <div className="icon">
              <img src="../../../src/assets/Vector.png" alt="gear" />
              <p className="skill m-0">Software Engineers</p>
              <p className="learn m-0">
                Learn the user experience, client management, technical, and
                practical skills you need to launch a career as a user
                experience (UX) or user interface (UI) designer.
              </p>
            </div>
            <div className="icon">
              <img src="../../../src/assets/Vector2.png" alt="screen.gear" />
              <p className="skill m-0">Front-end Developers</p>
              <p className="learn m-0">
                Learn the user experience, client management, technical, and
                practical skills you need to launch a career as a user
                experience (UX) or user interface (UI) designer.
              </p>
            </div>
            <div className="icon">
              <img src="../../../src/assets/Vector3.png" alt="ui/ux" />
              <p className="skill m-0">UI/UX Designers</p>
              <p className="learn m-0">
                Learn the user experience, client management, technical, and
                practical skills you need to launch a career as a user
                experience (UX) or user interface (UI) designer.
              </p>
            </div>
          </div>
          <div className="set-2 container">
            <div className="icon">
              <img src="../../../src/assets/Vector4.png" alt="backend" />
              <p className="skill m-0">Back-end Developers</p>
              <p className="learn m-0">
                Learn the user experience, client management, technical, and
                practical skills you need to launch a career as a user
                experience (UX) or user interface (UI) designer.
              </p>
            </div>
            <div className="icon">
              <img src="../../../src/assets/Vector5.png" alt="data" />
              <p className="skill m-0">Data Analyst</p>
              <p className="learn m-0">
                Learn the user experience, client management, technical, and
                practical skills you need to launch a career as a user
                experience (UX) or user interface (UI) designer.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =======================================SEC 4====================================== --> */}
      <section>
        <div className="form-2">
          <div className="help">
            <p className="let m-0">Let's help you hire</p>
            <p className="fit m-0">
              Let our team of recruitment experts find the right talents fit for
              you. Based on your requirements, we will shortlist talents with
              matching skills and help you schedule interviews with them. We
              will assist you every step of the way.
            </p>
          </div>
          <form className="full form-2" onSubmit={handleSubmitTwo}>
            <input
              className="inname"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formDataTwo.name}
              onChange={handleChangeTwo}
            />
            <input
              className="inname2"
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formDataTwo.companyName}
              onChange={handleChangeTwo}
            />
            <input
              className="inemail"
              type="email"
              name="companyEmail"
              placeholder="Company Email"
              value={formDataTwo.companyEmail}
              onChange={handleChangeTwo}
            />
            <input
              className="inrole"
              type="text"
              name="role"
              placeholder="What role do you want to fill?"
              value={formDataTwo.role}
              onChange={handleChangeTwo}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      {/* <!-- =======================================FOOTER====================================== --> */}
      {/* <footer className="footer">
        <div className="upper">
          <div className="foot1">
            <img src="../../../src/assets/TSA community 3.png" alt="logo" />
            <p className="m-0">
              Welcome to Tech studio community hub, where you connect with
              fellow tech enthusiasts, share knowledge, and explore endless
              possibilities.
            </p>
          </div>
          <div className="foot2">
            <div className="bold">
              <p className="m-0">Quick Links</p>
            </div>
            <div className="plain">
              <Link to={`/explorecommunity`} className="m-0">
                Community
              </Link>
              <Link to={`/findtalent`} className="m-0">
                Find Talent
              </Link>
              <Link to={`/mainwebsite`} className="m-0">
                Go to Main Website
              </Link>
            </div>
          </div>
          <form className="foot3" onSubmit={handleSubmitemail}>
            <p className="m-0">Subscribe to our newsletter</p>
            <div className="sub">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email.email}
                onChange={handleChangemail}
              />
              <button type="submit">
                Subscribe <img src="../../../src/assets/Vector200.png" alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="lower">
          <hr />
          <div className="sm">
            <p className="m-0">Terms and Policy</p>
            <div className="media">
              <a href="#">
                <img src="../../../src/assets/svg.fs-xl.png" alt="twitter" />
              </a>
              <a href="#">
                <img
                  src="../../../src/assets/ant-design_instagram-filled.png"
                  alt="IG"
                />
              </a>
              <a href="#">
                <img src="../../../src/assets/Frame.png" alt="fb" />
              </a>
              <a href="#">
                {" "}
                <img src="../../../src/assets/Vector78.png" alt="linkdin" />
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default FindTalent;
