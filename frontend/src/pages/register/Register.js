import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("password not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Fan Club collaboration</h3>
          <span className='loginDesc'>
            {" "}
            Coonect with your friend. let us support our team
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox'>
            <input
              placeholder='Username'
              className='loginInput'
              required
              ref={username}
            />
            <input
              placeholder='Email'
              ref={email}
              type='email'
              className='loginInput'
            />

            <input
              placeholder='Password'
              type='password'
              className='loginInput'
              minLength='6'
              required
              ref={password}
            />
            <input
              placeholder='Confirm Password'
              type='password'
              ref={confirmPassword}
              required
              className='loginInput'
            />
            <button className='loginButton' type='submit' onClick={handleClick}>
              Signup
            </button>
            {/* <Link to='/login'> */}
            <button className='loginRegisterButton'>Login into Account</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
