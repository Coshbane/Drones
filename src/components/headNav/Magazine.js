import React, { Component } from 'react';
import styled from 'styled-components';


const sites = [
  {
    name: "Harry Porter",
    price: "$10",
    id: 1122
  },
  {
    name: "Game of Thrones",
    price: "$15",
    id: 1233
  },
  {
    name: "Inception",
    price: "$25",
    id: 1344
  }
];

const Button = styled.div`
  width: 15px;
`;



class Magazine extends Component {
  constructor(){
    super()

  }


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
