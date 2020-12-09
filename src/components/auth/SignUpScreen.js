import React, { useState } from 'react';

import useForm from 'hooks/useForm';
import validator from 'validator';
import { PASSWORD_LEN_MAX, PASSWORD_LEN_MIN } from 'fixtures';


// UI
import { makeStyles } from '@material-ui/core/styles'
import PasswordField from 'components/ui/PasswordField';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmail from '@material-ui/icons/AlternateEmail';





const nameIcon = (
  <InputAdornment position="end">
    <IconButton>
      <AccountCircle />
    </IconButton>
  </InputAdornment>
)

const emailIcon = (
  <InputAdornment position="end">
    <IconButton>
      <AlternateEmail />
    </IconButton>
  </InputAdornment>
)


const initialValues = {
  email: '',
  name: '',
  password: '',
  password2: '',
}

const initErrorValues = {
  email: {
    error: false,
    message: undefined
  },
  name: {
    error: false,
    message: undefined
  },
  password: {
    error: false,
    message: undefined
  },
  password2: {
    error: false,
    message: undefined
  }
}


const useStyles = makeStyles(theme => ({

  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));





function SignUpScreen() {

  const classes = useStyles();
  const [error, setError] = useState(initErrorValues);
  const [loading, setLoading] = useState(false);
  const [values, handleInputChange] = useForm(initialValues);
  const { password, password2, email, name } = values;


  
  function isValid() {

    const lim = { min: PASSWORD_LEN_MIN, max: PASSWORD_LEN_MAX }
    let errorFlag = false;
    const errorObject = {};

    if(!validator.isEmail(email)){
      errorFlag = true;
      errorObject.email = {
        error: true,
        message: 'Invalid email address'
      }
    }

    if(!validator.isLength(password, lim)){
      errorFlag = true;
      errorObject.password = {
        error: true,
        message: `Length must be between ${PASSWORD_LEN_MIN} and ${PASSWORD_LEN_MAX}`
      }
    }

    if(!(password === password2)){
      errorFlag = true;
      errorObject.password2 = {
        error: true,
        message: `Passwords must match`
      }
    }

    if(!(name.length >= 3)){
      errorFlag = true;
      errorObject.name = {
        error: true,
        message: `Your name must be at least 3 characters long`
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
    }else{
      setLoading(false);
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

      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input
          id='name-input'
          name="name"
          type='text'
          value={name}
          onChange={handleInputChange}
          endAdornment={nameIcon}
          error={error.name.error}
        />
        <FormHelperText>{error.name.message}</FormHelperText>
      </FormControl>

      <PasswordField
        fullWidth
        className={classes.margin}
        id='password'
        name='password'
        label='Password'
        value={password}
        onChange={handleInputChange}
        error={error.password.error}
        helperText={
          error.password.message ||
          `Length between ${PASSWORD_LEN_MIN} and ${PASSWORD_LEN_MAX}`
        }
      />

      <PasswordField
        fullWidth
        className={classes.margin}
        id='password2'
        name='password2'
        label='Password Again'
        value={password2}
        onChange={handleInputChange}
        error={error.password2.error}
        helperText={error.password2.message||`Please, repeate your password`}
      />

      <Box
        mt={2}
        p={3}
        display='flex'
        justifyContent='end'
      >

        <Button
          disabled={loading}
          color='secondary' variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

      </Box>

    </Box>
  )
}


export default SignUpScreen;

