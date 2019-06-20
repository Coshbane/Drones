import React, { Component } from 'react';

class Greetings extends Component {
    constructor(props){
      super(props)
      this.state = {
        isLoggedIn: true
      }
    }


    render() {
      const users = [
        {
          id: 1,
          name: 'Bruce',
          age: 32,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Rosie',
          age: 30,
          skill: 'Java'
        },
        {
          id: 3,
          name: 'Kent',
          age: 41,
          skill: 'Node'
        },
        {
          id: 4,
          name: 'Crows',
          age: 29,
          skill: 'Python'
        }
      ];

      const personList = users.map(person => <PersonName person={users} />)
      return <div>{personList}</div>
      // return this.state.isLoggedIn && <div>Welcome Kenobi</div>
    }


  // render() {
  //   return(
  //     this.state.isLoggedIn ? (
  //     <div>Welcome Kenobi</div>
  //   ) : (
  //     <div>Welcome Guest</div>
  //   )
  //
  // )
  //
  // }



    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Kenobi</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    //
    // return <div style={{ textAlign: 'center' }}>{message}</div>


    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Guest</div>
    // } else {
    //   return <div style={{ border: '1px solid black', width: '80px', height: '45px', cursor: }}>Welcome Kenobi</div>
    // }
  // }
    // return(
    //   <div>
    //     <div>Welcome Kenobi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
}

export default Greetings;
