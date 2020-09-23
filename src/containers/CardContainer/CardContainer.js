import React from 'react';
import Card from './Cards';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './CardContainer.styles';

const CardContainer = ({ classes, data, isLoading }) => {

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {!isLoading &&
          data.Country.map(e =>
            <Grid item xs>
              <Card infoCard={e} />
            </Grid>
          )}
      </Grid>
    </div>
  );
};


export default withStyles(styles)(CardContainer);