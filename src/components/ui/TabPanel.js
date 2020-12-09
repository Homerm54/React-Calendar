import React from 'react';
import PropTypes from 'prop-types';



function TabPanel(props) {

  const { children, value, index, form, ...other } = props;


  if (form) {

    return (
      <form
        hidden={value !== index}
        id={`auth-form-${index}`}
        aria-labelledby={`auth-form-${index}`}
        {...other}
      >
        { // Render children if the selected tab match this tab
          value === index && (
            children
          )
        }
      </form>
    )
  }

  
  return (
    <div
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-panel-${index}`}
      {...other}
    >

      { // Render children if the selected tab match this tab
        value === index && (
          children
        )
      }

      </div>
  )
}




TabPanel.propTypes = {
  children: PropTypes.node,
  form: PropTypes.bool,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default TabPanel;