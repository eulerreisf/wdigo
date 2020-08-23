import React, { useEffect } from 'react';
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
  console.log('data', data, loading);
  useEffect(() => {
    if (data) {
      console.log('data', data, loading);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      {!loading &&
        data.Country.map(e => <Card infoCard={e} data={data} />)}
    </div>
  );
};


export default withStyles(styles)(CardContainer);