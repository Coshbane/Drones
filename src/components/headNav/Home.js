import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';


const contacts = {
  name: 'Scott',
  phone: '414-072-4098',
}

class Home extends Component {

  render() {
    console.log(this.props.contacts)
    return (
      <div className='contain'>
          <div className='below-nav'>
            <Animated className='word-on-image' animationIn='fadeIn' animationInDelay='1000'>
              <h2 className='image-word'>DRONE AGE</h2>
            </Animated>
          </div>

        <div className='slider'>

          <div className='slide'>
            <h2 className='type-drone'>Farm Drone</h2>
              <hr></hr>

          <div className='inside-box1'>

          </div>
        </div>

        <div className='slide'>
        <h2 className='type-drone'>Taxi Drone</h2>
        <hr></hr>
          <div className='inside-box2'>
          </div>
        </div>

        <div className='slide'>
        <h2 className='type-drone'>Camera Drone</h2>
        <hr></hr>
          <div className='inside-box3'>
          </div>
        </div>


        </div>

      </div>
    )
  }
}


export default Home;
