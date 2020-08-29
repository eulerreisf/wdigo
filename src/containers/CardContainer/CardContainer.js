import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRYS } from 'services/querys';
import Card from './Cards';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex'
  }
};

const CardContainer = ({ classes }) => {
  const { data, loading } = useQuery(GET_COUNTRYS);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {!loading &&
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