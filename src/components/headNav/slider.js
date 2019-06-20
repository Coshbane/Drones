//import React, { Component } from 'react';
//import Slide from '../headNav/slide';
//import LeftArrow from '../headNav/LeftArrow';
//import RightArrow from '../headNav/RightArrow';


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://factordaily.com/wp-content/uploads/2018/07/Agri-Tech_Drone-Lead.jpg",
        "https://wp-assets.futurism.com/2016/10/Agriculture-Drones-Are-Finally-Cleared-for-Takeoff.jpg",
        "https://images.squarespace-cdn.com/content/55f0ec3ae4b085536b706743/1552569387431-NXAJW9WTF48J8DB5NVTO/agriculture-drone.jpeg",
        "https://mediashower.com/img/5BDE030E-CFE3-11E6-90FD-FC99CF9BF260/bigstock-PILSEN-CZECH-REPUBLIC--FEBRUA-118700132_600x.jpg",
        "https://i.dailymail.co.uk/i/newpix/2018/08/24/08/4F598B2A00000578-6093135-The_drone_applies_pesticides_and_fertilizer_to_a_rice_field_in_1-a-27_1535097228374.jpg",
        "https://cropwatch.unl.edu/styles/hero/public/images/hero/2017/Drone-over-corn-NCR-SARE-Stevens-3.jpg",
        "https://www.wctrib.com/sites/default/files/styles/16x9_620/public/fieldimages/1/0722/1jffp-w2inm6vvfquojivr4yx5sdwgp.jpg",
        "https://globaldroneuav.com/file/upload/201805/29/16344323734.jpg.middle.jpg",
        "https://imagesvc.timeincapp.com/v3/foundry/image/?q=70&w=1440&url=https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fbrazil-portal-simactive-farm-hero-01.jpg",
        "https://pbs.twimg.com/media/Dd3wA_qVwAAQVqa.jpg"
      ],
      currentIndex: 0
    }
  }

  nextArrow = () => {
    this.setState(nextState => ({
      currentIndex: nextState.currentIndex +1
    }));
  }


  previousArrow = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }

  render() {
    return(
      <div className='slider'>

      <div className='slider-wrapper'>
        style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: `transform ease-out 0.45s`
         }}>
            {
              this.state.images.map((image, i) =>(
                <Slide key={i} image={image} />
              ))
            }
      </div>

      <LeftArrow
        prevArrow={this.prevArrow}
      />

      <RightArrow
        nextArrow={this.nextArrow}
      />

      </div>
    );
  }
}

export default Slider;
