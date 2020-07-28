import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const PanelContainer = ({ classes }) =>
  <div className={classes.container}>
    PanelContainer
  </div>;

export default withStyles(styles)(PanelContainer);