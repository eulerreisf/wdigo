import React from 'react';

import { useTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Input from 'components/Input';

import styles from './styles';

const Header = ({ classes, onSearch }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.appBar}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h4" noWrap>
            {t('WDIGO')}
          </Typography>
          <Input search={true} onSearch={onSearch} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);