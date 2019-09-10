import React, { Component } from 'react';
//import Slider from '../headNav/slider';
import { Animated } from "react-animated-css";
import { Carousel } from 'element-react';
import 'element-theme-default';
// import NewsLetter from '../headNav/newsletter';
//import farmData from '../DroneTypes/farmData';



class Home extends Component {

  render() {
    return (
      <div className='contain'>
          <div className='below-nav'>
            <Animated className='word-on-image' animationIn='fadeIn' animationInDelay='1000'>
              <h2 className='image-word'>DRONE AGE</h2>
            </Animated>
          </div>

      <section className='box-control'>
          <h2 className='dronesT'>Drones</h2>
          <div className='col'>
            <Carousel interval="5500" type="card" height="450px">
              {
                ['https://factordaily.com/wp-content/uploads/2018/07/Agri-Tech_Drone-Lead.jpg',
                'https://wp-assets.futurism.com/2016/10/Agriculture-Drones-Are-Finally-Cleared-for-Takeoff.jpg',
                'https://images.squarespace-cdn.com/content/55f0ec3ae4b085536b706743/1552569387431-NXAJW9WTF48J8DB5NVTO/agriculture-drone.jpeg',
                'https://mediashower.com/img/5BDE030E-CFE3-11E6-90FD-FC99CF9BF260/bigstock-PILSEN-CZECH-REPUBLIC--FEBRUA-118700132_600x.jpg',
                'https://i.dailymail.co.uk/i/newpix/2018/08/24/08/4F598B2A00000578-6093135-The_drone_applies_pesticides_and_fertilizer_to_a_rice_field_in_1-a-27_1535097228374.jpg',
                'https://cropwatch.unl.edu/styles/hero/public/images/hero/2017/Drone-over-corn-NCR-SARE-Stevens-3.jpg'
                ].map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img style={{ width: '100%', display: 'cover', height: '100%' }} src={item} alt="" />
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
        </div>
      </section>

      <div className='emailaddress'>

          <h3>Join Mailing List</h3>

        <div className='news-letter'>

          <div className='email-form'>
            <label className="mailist-leb">Name</label>
            <input type="text" name="" Required />

            <label className="mailist-leb">Email</label>
            <input type="email" name="emailaddress"/>
          </div>

          <div className="mailist-submit">Submit</div>

        </div>

      </div>

      </div>
    )
  }
}

export default Home;
