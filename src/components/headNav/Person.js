import React from 'react';


function Person ({users}) {
  return (
    <div>
      <h2>
        I am {users.name}. I am {users.age} years old. I know {users.skill}.
      </h2>
    </div>
  )
}

export default Person;
