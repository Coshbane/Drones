import React from 'react';

const RightArrow = (props) => {
  return (
    <div classname='nextArrow' onClick={props.nextArrow}>
      <i class="fas fa-chevron-right"></i>
    </div>
  )
}


export default RightArrow;
