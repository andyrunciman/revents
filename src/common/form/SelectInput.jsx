import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => {
  //Select onChange works differently from
  //standard onChnage - it has two parameters
  //event,data - data has a value prop
  //can be written onChange = (e,{value})=>{this.setState({value})}
  return (
    <Form.Field error={touched && !!error}>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched &&
        error && (
          <Label pointing basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default SelectInput;
