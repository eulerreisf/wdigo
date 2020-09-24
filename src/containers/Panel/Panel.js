import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from 'services/querys';

import Header from 'containers/Header';
import CardContainer from 'containers/CardContainer';

import styles from './styles';

const PanelContainer = ({ classes }) => {
  const [cardFilter, setCardFilter] = useState('');

  const { data, loading } = useQuery(GET_COUNTRIES, {
    variables: cardFilter ? { name: cardFilter } : {}
  });

  const onSearch = value => setCardFilter(value);

  return (
    <div className={classes.container}>
      <Header onSearch={onSearch} />
      <CardContainer data={data} isLoading={loading} />
    </div>
  );
};

export default withStyles(styles)(PanelContainer);