import React from 'react';
import './styles/App.css';
import Form from './components/Form.jsx'



function App() {
  return(
    <div>
    <h1 id = 'title'>Survey form</h1>
         <div>
         <p id = 'description'>If there was a referendum on Britain’s membership of the EU, how would you vote?  </p>
         <Form />
         </div>
    </div>
  )

}





export default App
