import React from 'react';

const Age = () => {

return(

  <div>
  <label id='number-label' />
  Age:

  <input
  type = 'number'
  min="18"
  max="99"
  id = 'number'
  placeholder = 'Age' />

  <input type = 'submit' value = 'Submit' />

  </div>

)




}

export default Age
