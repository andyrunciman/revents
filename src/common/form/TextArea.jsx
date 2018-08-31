import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextArea = ({
  input,
  rows,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    //input = an object with onChange/value defined... this saves having to code your own
    //handler like:
    //onChange = (e) => {
    //this.setState({[e.target.name]:e.target.value})
    //}
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} rows={rows} />
      {touched &&
        error && (
          <Label pointing basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default TextArea;
