import React, { Component }from 'react';


class Contact extends Component{

  constructor(props) {
    super(props);
    this.state = {
      sub: "Submit",
    };

  }

  render(){

    return(
        <div className="main-contact">
          <div class={"contact-body"}>
            <form>
              <label>NAME</label>
              <div><input className={"name-input inp"} type="text" name="" required placeholder="Enter Name"/></div>
              <label>EMAIL</label>
              <div><input className={"email-input inp"} type="email" name="" required placeholder="Enter Email"  /></div>
              <label>HOW CAN WE HELP YOU?</label>
              <div><textarea maxlength="200" name="" cols="50" rows="15" placeholder="Enter text here..."></textarea></div>
              <div className={"form-submit"}>{this.state.sub}</div>
            </form>
          </div>
        </div>
    )
  }
}


export default Contact;
