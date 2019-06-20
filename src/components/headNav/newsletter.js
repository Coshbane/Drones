import React, { Component } from 'react';


class NewsLetter extends Component {
  render() {
    return (
      <div className='emailaddress'>

          <h3>Join Mailling List</h3>

        <div className='news-letter'>

          <div className='email-form'>
            <label>Name:</label>
            <input type="text" name="" value="" />
          </div>

          <div className='email-form'>
            <label>Email Address:</label>
            <input type="email" name="emailaddress" value="" />
          </div>

        </div>

      </div>
    )
  }
}

export default NewsLetter;
