import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''}
      this.handleChange = this.handleChange.bind(this)
  }
handleChange(event) {
  this.setState({value: event.target.value});
}
render() {
  return(
    <label id = 'dropdown'>
    Ocupation:
    <select value = {this.state.value} onChange = {this.handleChange}>
    <option value = 'fulltime'>Full Time Job</option>
    <option value = 'parttime'>Part Time Job</option>
    <option value = 'student'>Student</option>
    </select>
    </label>

  )
}

}
export default Dropdown
