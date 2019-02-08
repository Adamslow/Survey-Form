import React from 'react';

const Name = () => {
  return(
    <div>
    <label id="name-label">
    Name:
    <input type = 'text' id = 'name' placeholder = 'Name'/>
    </label>
    <input type = 'submit' value = 'Submit' />
    </div>
  )
}



export default Name
