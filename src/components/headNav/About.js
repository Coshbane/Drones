import React, { Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-main">
        <div className="sub-head">
          <h1 className="abt-heading" style={{color: "#0075f6"}}>Dream Dronez</h1>
          <div className="head-prg">
          <p className="head-message" style={{color: "#fff"}}>We take pride in learning more and publishing cool stuffs. </p>
          </div>
        </div>
        <div className="sub-message">
          <div className="sub-message-pg">
          <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
           It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
           Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          </div>

        </div>
      </div>
    )
  }
}


export default About;
