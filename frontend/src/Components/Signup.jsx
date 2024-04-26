import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setFormData({ ...formData, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/users";
			const { formData: res } = await axios.post(url, formData);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
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
                placeholder="ex: John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="ex: johnnydoe94"
                value={formData.username}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="ex: John@nutriwave.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="signup_details_fields">
                <div>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder=" 18"
                  value={formData.age}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label>Weight</label>
                <input
                  type="number"
                  name="weight"
                  placeholder=" 70(kg)"
                  value={formData.weight}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label>Height</label>
                <input
                  type="number"
                  name="height"
                  placeholder=" 180(cm)"
                  value={formData.height}
                  onChange={handleChange}
                />
                </div>
              </div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder=" Password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="button-container-signuppage">
               <button className="signup_main_button" type="submit">Sign Up</button>
               <span>Or</span>
               <div className="google_facebook_signup">
                <div>G</div>
                <div>F</div>
               </div>
              </div>
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
