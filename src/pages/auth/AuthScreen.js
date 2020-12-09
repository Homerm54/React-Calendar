import React, { useState } from 'react';

// Components
import SignInScreen from 'components/auth/SignInScreen';
import SignUpScreen from 'components/auth/SignUpScreen';


// UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from 'components/ui/TabPanel';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    height: '100%',
    marginBottom: theme.spacing(2),
  },
}))




function AuthScreen() {
  // TODO:
  // Add loading in buttons
  // use router hook to check params to render sign up or sign in
  // /auth?signup - /auth?signin
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabChange(e, newValue) {
    setTabIndex(newValue);
  }


  return (
    <Container maxWidth='xs' className={classes.root}>
      <Paper elevation={2}>

        <AppBar position='static' variant='outlined' component='div'>

          <Tabs
            value={tabIndex} onChange={handleTabChange}
            textColor='secondary' centered
          >

            <Tab label='Sign In' id='auth-tab-0' />
            <Tab label='Sign Up' id='auth-tab-1' />
          </Tabs>

        </AppBar>


        <TabPanel value={tabIndex} index={0} form>
          <SignInScreen />
        </TabPanel>

        <TabPanel value={tabIndex} index={1} form>
          <SignUpScreen />
        </TabPanel>

      </Paper>
    </Container>
  )
}


export default AuthScreen;

