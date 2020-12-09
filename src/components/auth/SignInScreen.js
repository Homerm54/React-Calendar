import React, { useState } from 'react';

import validator from 'validator';
import useForm from 'hooks/useForm';
import { PASSWORD_LEN_MAX, PASSWORD_LEN_MIN } from 'fixtures';

// UI
import { makeStyles } from '@material-ui/core/styles'
import PasswordField from 'components/ui/PasswordField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import AlternateEmail from '@material-ui/icons/AlternateEmail';




const emailIcon = (
  <InputAdornment position="end">
    <IconButton>
      <AlternateEmail />
    </IconButton>
  </InputAdornment>
)


const initErrorValues = {
  email: {
    error: false,
    message: undefined
  },
  password: {
    error: false,
    message: undefined
  },
}


const initialValues = {
  email: '',
  password: '',
}


const useStyles = makeStyles(theme => ({

  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));




function SignInScreen() {


  const classes = useStyles();
  const [error, setError] = useState(initErrorValues);
  const [loading, setLoading] = useState(false);
  const [values, handleInputChange] = useForm(initialValues);
  const { password, email } = values;



  function isValid() {

    const lim = { min: PASSWORD_LEN_MIN, max: PASSWORD_LEN_MAX }
    let errorFlag = false;
    const errorObject = {};

    if (!validator.isEmail(email)) {
      errorFlag = true;
      errorObject.email = {
        error: true,
        message: 'Invalid email address'
      }
    }

    if (!validator.isLength(password, lim)) {
      errorFlag = true;
      errorObject.password = {
        error: true,
        message: `Length must be between ${PASSWORD_LEN_MIN} and ${PASSWORD_LEN_MAX}`
      }
    }


    if (errorFlag) {
      console.log('Error validating this shit');
      setError(errorObject);
      return false;
    }

    setError(initErrorValues);
    return true;

  }


  function handleSubmit(e) {

    e.preventDefault();
    setLoading(true);
    if (isValid()) {
      console.log('Form submited with values:', values);
    }
  }



  return (
    <Box p={3} pt={2} mb={2}>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input
          id='email-input'
          name="email"
          type='email'
          value={email}
          onChange={handleInputChange}
          endAdornment={emailIcon}
          error={error.email.error}
        />
        <FormHelperText>{error.email.message}</FormHelperText>
      </FormControl>


      <PasswordField
        fullWidth
        error={error.password.error}
        className={classes.margin}
        id='password'
        name='password'
        label='Password'
        value={password}
        onChange={handleInputChange}
        helperText={error.password.message}
      />


      <Box
        mt={2}
        p={3}
        display='flex'
        justifyContent='space-between'
      >
        <Button color="primary" disabled>Reset Password</Button>

        <Button
          disabled={loading}
          color='secondary' variant="contained"
          onClick={handleSubmit}
        >
          Sign In
          </Button>

      </Box>

    </Box>
  )
}


export default SignInScreen;

