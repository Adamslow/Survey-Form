import React from 'react';

const Radio = () => {
  return(
    <div>
    <h4>Would you vote?</h4>
    <label>Definitely
    <input type = 'radio' name = 'radio'/>
    </label><label>Maybe
    <input type = 'radio' name = 'radio'/>
    </label><label>Not sure
    <input type = 'radio' name = 'radio'/>
    </label><label>Can't be bothered
    <input type = 'radio' name = 'radio'/>
</label>
    </div>
  )
}



export default Radio
