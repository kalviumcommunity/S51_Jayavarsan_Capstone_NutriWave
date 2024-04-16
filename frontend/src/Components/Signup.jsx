import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import banner from "../assets/signupbanner.png";
import backicon from "../assets/back.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to an API or perform any necessary actions
    console.log(formData);
  };

  return (
    <div className="signup_container_div">
      <div className="signup_form_div">
        <div className="signup_from_main_sub_div">
          <div className="signup_form_backdiv">
            <Link to="/">
              <button>
                <img src={backicon} alt="" />
              </button>
            </Link>
            <div>
              <span>
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="signin_button_signup">Sign in</span>
                </Link>
              </span>
            </div>
          </div>
          <div className="signup_form_mainsignup_option_div">
            <form
              className="signup_form_mainsignup_option_div_forum"
              onSubmit={handleSubmit}
            >
              <h1 className="signup_form_title">Sign up</h1>
              <p className="signup_form_subtitle" >Enter Your Information and satrt you healthy journey</p>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="signup_details_fields">
                <div>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label>Weight</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="Weight (kg)"
                  value={formData.weight}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label>Height</label>
                <input
                  type="number"
                  name="height"
                  placeholder="Height (cm)"
                  value={formData.height}
                  onChange={handleChange}
                />
                </div>
              </div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <button className="signup_main_button" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <div className="signup_banner_div">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}

export default Signup;
