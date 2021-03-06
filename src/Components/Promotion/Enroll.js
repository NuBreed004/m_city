import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormFields from '../UI/formFields';
import {validate} from '../UI/misc';

class Enroll extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      },
    }
  }

  submitForm = (e) => {

  }

  updateForm = (element) => {
    const newFormData = {...this.state.formData}
    const newElement = {  ...newFormData[element.id] }

    newElement.value = element.event.target.value


    const validData = validate(newElement)
    newElement.valid = validData[0]
    newElement.validationMessage = validData[1]

    newFormData[element.id] = newElement
    this.setState({
      formData: newFormData
    })
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={ (event)=> this.submitForm(event) }>
            <div className="enroll_title">
              Enter your email
            </div>
            <div className="enroll_input">
              <FormFields
                id='email'
                formdata={this.state.formData.email}
                change={(element)=> this.updateForm(element)}
               />
            </div>
          </form>
        </div>
      </Fade>
    );
  }

}

export default Enroll;
