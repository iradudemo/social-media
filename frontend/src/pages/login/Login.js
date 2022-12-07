import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
          <form className='loginBox' onSubmit={handleClick}>
            <input
              type='email'
              placeholder='Email'
              className='loginInput'
              required
              ref={email}
            />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
              required
              minLength={6}
              ref={password}
            />
            <button className='loginButton' disabled={isFetching}>
              {isFetching ? <CircularProgress className='lgn' /> : "Log In"}
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
