import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Cards = ({ classes }) =>
  <Card variant="outlined" className={classes.CardContainer}>
    <CardContent>
      <Typography>NossoCard</Typography>
    </CardContent>
  </Card>;

export default withStyles(styles)(Cards);