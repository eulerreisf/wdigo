import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import CardContainer from '../CardContainer';

const PanelContainer = ({ classes }) =>
  <div className={classes.container}>
    <CardContainer />
  </div>;

export default withStyles(styles)(PanelContainer);