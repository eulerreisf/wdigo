import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';


import Header from 'containers/Header';
import CardContainer from '../CardContainer';

const PanelContainer = ({ classes }) => {

  return (
    <div className={classes.container}>
      <Header />
      <CardContainer />
    </div>);
};

export default withStyles(styles)(PanelContainer);