import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRYS } from 'services/querys';
import Card from './Cards';
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
      {!loading &&
        data.Country.map(e => <Card infoCard={e} />)}
    </div>
  );
};


export default withStyles(styles)(CardContainer);