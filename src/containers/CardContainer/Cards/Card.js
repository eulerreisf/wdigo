import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Cards = ({ classes, infoCard }) => {
  return (
    <Card variant="outlined" className={classes.CardContainer}>
      <CardHeader
        title={infoCard.name}
        subheader={infoCard.nativeName}
      />
      <CardMedia
        className={classes.media}
        image={infoCard.flag.svgFile}
        title={infoCard.name}
      />
      <CardContent>
        <Typography variant="body1">
          {infoCard.officialLanguages[0].name}
        </Typography>
        <Typography variant="body2">
          {infoCard.officialLanguages[0].nativeName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Cards);