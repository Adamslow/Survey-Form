import React from 'react';

const Checkbox = () => {
  return(
    <div>
    <h4>How would you vote?</h4>
    <label>Brexit:
    <input type = 'checkbox' value = 'brexit'/>
    </label>
    <label>No Brexit:
    <input type = 'checkbox' value = 'nobrexit'/>
    </label>
    <label>No Exit:
    <input type = 'checkbox' value = 'noexit'/>
    </label>
    </div>
  )
}




export default Checkbox
