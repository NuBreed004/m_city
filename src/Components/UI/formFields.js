import React from 'react';

const FormFields = (props) => {

const renderTemplate = () => {
  let formTemplate = null

  switch (props.formdata.element) {
    case 'input':
      formTemplate = (
        <div>
          <input
            {...props.formdata.config}
            value={props.formdata.value}
           />
        </div>
      )
      break;
      default:
        formTemplate = null
  }
  return formTemplate
}

  return (
    <div>
      {renderTemplate()}
    </div>
  )
};

export default FormFields;
