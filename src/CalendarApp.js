import React from 'react';

import { Provider } from "react-redux";
import store from 'state-manager/store';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import Navbar from 'components/ui/Navbar';
import ThemeProvider from 'components/ThemeProvider';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import 'react-big-calendar/lib/css/react-big-calendar.css';



/**
 * Provide all the HOC, Context Providers, Redux Providers and
 * Components that must come before our App.
 * 
 * The real code of the application is inside the AppRouter.
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CssBaseline />
            <Navbar />
            <AppRouter />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
