import React from 'react'


const Slide = ({ image }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: `cover`,
  }
  return <div className='slide'></div>
}


export default Slide;
