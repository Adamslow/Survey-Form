import React from 'react';

const Email = () => {
  return(
    <label id="email-label">
    Email:
    <input type = 'email' id = 'email' placeholder = 'Enter a valid email address' />
    <input type = 'submit' value = 'Submit' />
    </label>
  )
}



export default Email
