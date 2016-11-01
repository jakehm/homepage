import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './BlueAppBar.scss';

const BlueAppBar = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
    Jacob Harrow-Mortelliti
    {children}
  </AppBar>
);

BlueAppBar.propTypes = {
  children: PropTypes.node
};

export default BlueAppBar;
