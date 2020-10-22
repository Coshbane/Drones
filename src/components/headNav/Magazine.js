import React, { Component } from 'react';
// import styled from 'styled-components';



class Magazine extends Component {


  render() {
    return (
      <div className="over">
        <div className="cam-wrapper">
          <div className="cam-heading">
            <h3 className="cam-title fadeInDown">DRONEZ</h3>
          </div>
          

        <div className="wrapper">

          <div className="cam-drone">
            <div className="cam-imageA">
              <a className="cam-button" href="https://www.dji.com/">Visit Site</a>
            </div>
            <h4>This is a Nice Items</h4>
            <p>We are in need of this item so badly.</p>
          </div>

          <div className="cam-drone ">
            <div className="cam-imageB">
              <a className="cam-button" style={{color: "black"}} href="https://uavcoach.com/">Visit Site</a>
            </div>
            <h4>This is a Nice Items</h4>
            <p>We are in need of this item so badly.</p>
          </div>

          <div className="cam-drone">
            <div className="cam-imageC">
              <a className="cam-button" href="https://www.precisionhawk.com/">Visit Site</a>
            </div>
            <h4>This is a Nice Items</h4>
            <p>We are in need of this item so badly.</p>
          </div>


        </div>

          <div className="vid-tag">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TXFrCy47ue8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
       

      </div>
    )
  }
}


export default Magazine;
