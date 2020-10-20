import React from 'react'
// import { Link } from "react-router-dom";
function SignUp(){
    return(
    <div>
    <div className="section"></div>
    <center>
      <h5 className="">Account Sign Up</h5>
      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>
          <form className="col s12" method="post">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input type='text' name='email' id='firstname' />
                <label for='first_name'>First Name</label>
              </div>
              <div className='input-field col s6'>
                <input type='text' name='email' id='lastname' />
                <label for='last_name'>Last Name</label>
              </div>
            </div>
            <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='email' name='email' id='email' />
                  <label for='email'>Enter your email</label>
                </div>
              </div>
            
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
            </div>

            <br />
            <center>
              <div className='row'>
                <button type='submit' name='btn_signup' className='col s12 btn btn-large waves-effect'>Signup</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <div className="section"></div>
    </center>
    </div>
    )
}
export default SignUp