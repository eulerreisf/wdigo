import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import styles from './styles';

const InputContainer = ({ classes, search }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Input
        className={classes.search}
        placeholder={t('SEARCH')}
        disableUnderline={true}
      />
      {search &&
        <Button className={classes.button}>
          <Search style={{ color: 'white' }} />
        </Button>}
    </div>
  );
};

InputContainer.propTypes = {
  search: PropTypes.bool
};

InputContainer.defaultProps = {
  search: false
};


export default withStyles(styles)(InputContainer);