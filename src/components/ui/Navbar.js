import React from 'react';

// UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import MenuIcon from '@material-ui/icons/Menu';

// import AccountCircle from '@material-ui/icons/AccountCircle';
import SignOut from '@material-ui/icons/ExitToApp';




const useStyles = makeStyles(theme => ({


  appbarTitle: {
    flexGrow: 1
  },
  colorPrimaryDark: {
    backgroundColor: theme.palette.primary.dark,
  }
}))




function Navbar() {

  const classes = useStyles();


  function handleSignOut(e) {

    console.log('User Signed Out!')
  }



  return (
    <AppBar
      position='sticky'
    // classes={{colorPrimary: classes.colorPrimaryDark}}
    >
      <ToolBar>

        <Typography
          component='h1' variant='h5'
          className={classes.appbarTitle}
        >
          User Name Here
        </Typography>


        <IconButton
          aria-label="Sign Out"
          aria-controls="menu-appbar"
          aria-haspopup="false"
          onClick={handleSignOut}
          color="inherit"
          edge="end"
        >

          <Tooltip title='Sign Out' arrow aria-label='Sign Out'>
            <SignOut />
          </Tooltip>

        </IconButton>

      </ToolBar>
    </AppBar>
  )
}


export default Navbar;

