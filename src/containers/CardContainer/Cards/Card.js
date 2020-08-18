import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import styles from './styles';

const Cards = ({ classes }) => {
  const { t } = useTranslation();
  return (
    <Card variant="outlined" className={classes.CardContainer}>
      <CardContent>
        <Typography>{t('OUR_CARD')}</Typography>
      </CardContent>
    </Card>);
};

export default withStyles(styles)(Cards);