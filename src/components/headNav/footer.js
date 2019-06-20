import React, { Component } from 'react';
import Facelogo from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png'


let Footer = () => {
  return (
    <div className='foot-main'>

    <div className='loc side-border'>
        <h4 className='address' style={{ paddingBottom: '10px' }}>Location</h4>
        <div className='format-address'>

          <p className='main-address'>1120 East Buffalo Dr <br/> Milwaukee, WI 08924</p>
        </div>
    </div>

    <div className='loc foot side-border'>
        <h4 style={{ paddingBottom: '10px' }}>About The Company</h4>
        <p>Lorem all is a great day. <br/> We are one family. <br/> Site created by Ken B. Igoni</p>
    </div>

    <div className='loc affiles foot short'>

        <h4 style={{ paddingBottom: '10px' }}>Social Media</h4>
        <a href="https://www.facebook.com/"><img src={Facelogo} alt="" className='social-media soc-media' /></a>
        <a href="https://twitter.com"><img src={Twitter} alt="" className='social-media soc-media' /></a>
        <a href="https://www.youtube.com/"><img src={Youtube} alt="" className='social-media soc-media' /></a>

    </div>

    </div>
  )
}

export default Footer;
