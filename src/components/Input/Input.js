import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Input,
  InputAdornment
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import styles from './styles';

const InputContainer = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <Input
      className={classes.search}
      placeholder={t('SEARCH')}
      startAdornment={(
        <InputAdornment position="start">
          <Search style={{ color: 'white' }} />
        </InputAdornment>
      )}
      disableUnderline={true}
    />
  );
};

export default withStyles(styles)(InputContainer);