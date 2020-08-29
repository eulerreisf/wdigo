import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import styles from './styles';

const Header = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.appBar}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {t('WDIGO')}
          </Typography>
          <TextField
            className={classes.search}
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </div>);
};

export default withStyles(styles)(Header);