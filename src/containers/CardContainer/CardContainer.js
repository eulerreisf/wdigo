import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRYS } from 'services/querys';
import Card from './Cards';
import { withStyles } from '@material-ui/core/styles';

const infoCard = [
  {
    name: 'Brazil',
    nativeName: "Brasil",
    officialLanguages: [
      {
        name: "Portuguese",
        nativeName: "Português"
      }
    ],
    flag: {
      svgFile: "https://restcountries.eu/data/bra.svg"
    },
  },
  {
    name: 'Brazil',
    nativeName: "Brasil",
    officialLanguages: [
      {
        name: "Portuguese",
        nativeName: "Português"
      }
    ],
    flag: {
      svgFile: "https://restcountries.eu/data/bra.svg"
    },
  },
  {
    name: 'Brazil',
    nativeName: "Brasil",
    officialLanguages: [
      {
        name: "Portuguese",
        nativeName: "Português"
      }
    ],
    flag: {
      svgFile: "https://restcountries.eu/data/bra.svg"
    },
  }
];

const styles = {
  container: {
    display: 'flex'
  }
};

const CardContainer = ({ classes }) => {
  const { data } = useQuery(GET_COUNTRYS);

  useEffect(() => {
    if (data) {
      console.log('data', data);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      {infoCard.map(e => <Card infoCard={e} data={data} />)}
    </div>
  );
};


export default withStyles(styles)(CardContainer);