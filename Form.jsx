import React, {Component} from 'react';
import Age from './Age.jsx';
import Dropdown from './Dropdown.jsx';
import Radio from './Radio.jsx';
import Checkbox from './Checkbox.jsx';
import Text from './Text.jsx';
import Name from './Name.jsx';
import Email from './Email.jsx'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleSubmit =this.handleSubmit.bind(this)
  }
handleSubmit(event) {
  alert('Thanks');
  event.preventDefault();
}

  render() {
    return(
      <div>
      <form id = 'survey-form' onSubmit = {this.handleSubmit}>
      <Name />
      <br/>
      <Email />
      <br /><br/>
      <Age />
      <br/>
      <Dropdown /><br /><br />
      <Radio /><br />
      <Checkbox /><br />
      <Text /><br />
      <input type = 'submit' value = 'Submit' />
      </form>
      </div>

    )
  }

}



export default Form
