import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
query getCountries($name: String) {
  Country(filter: {name: $name}) {
    name
    nativeName
    alpha2Code
    alpha3Code
    area
    population
    populationDensity
    capital
    demonym
    gini
    location {
      latitude
      longitude
    }
    numericCode
    subregion {
      name
      region {
        name
      }
    }
    officialLanguages {
      iso639_1
      iso639_2
      name
      nativeName
    }
    currencies {
      name
      symbol
    }
    regionalBlocs {
      name
      acronym
      otherAcronyms {
        name
      }
      otherNames {
        name
      }
    }
    flag {
      emoji
      emojiUnicode
      svgFile
    }
    topLevelDomains {
      name
    }
    callingCodes {
      name
    }
    alternativeSpellings {
      name
    }
  }
}`;
