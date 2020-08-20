import React from 'react';
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
  return (
    <div className={classes.container}>
      {infoCard.map(e => <Card infoCard={e} />)}
    </div>
  );
};


export default withStyles(styles)(CardContainer);