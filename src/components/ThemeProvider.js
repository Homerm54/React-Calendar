import React, { useMemo } from 'react';

import { createMuiTheme, 
         ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';



function customMuiTheme(darkMode = false) {

  return createMuiTheme({
    palette: {
      type: darkMode? 'dark': 'light',
      primary: {
        main: '#007ac2',
      },
      secondary: {
        main: '#64dd17',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
            height: '100vh'
          },
          '#root': {
            height: '100%',
          }
        }
      }
    }
  });
}




function ThemeProvider({ children }){

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => customMuiTheme(), []);

  return(
    <MuiThemeProvider theme={theme}>
      { children }
    </MuiThemeProvider>
  )
}


export default ThemeProvider;

