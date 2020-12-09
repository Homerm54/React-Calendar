import React, { useState } from 'react';

import PropTypes from 'prop-types';


// UI
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';





function PasswordField(props) {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { value, onChange, name, id,
    label, helperText, error, ...others } = props;


  function handlePasswordVisibleClick() {
    setPasswordVisible(!passwordVisible);
  }



  return (
    <FormControl {...others}>
      <InputLabel htmlFor={id}>{label || 'Password'}</InputLabel>
      <Input
        id={id}
        name={name}
        type={passwordVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        error={error || false}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlePasswordVisibleClick}
            >
              {passwordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}



PasswordField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
}



export default PasswordField;

