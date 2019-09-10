import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className='login register'>
        <div className='log body-log'>
          <h2 className='login-word'>Login</h2>

          <div className='form'>
            <input type="text" autocomplete='off' required name="" />
            <label for='name' className='label-name'>
              <span className='cont-name'>Email</span>
            </label>
          </div>

          <div className='form'>
            <input type="text" autocomplete='off' required name="" />
            <label for='name' className='label-name'>
              <span className='cont-name'>Password</span>
            </label>
          </div>

          <div className='button-submit'>
            <div className='buttn-sub'>Submit</div>
          </div>

          <div className='button-submit'>
            <div className='buttn-sub'>Register</div>
          </div>

        </div>


      </div>
    )
  }
}


export default Login;
