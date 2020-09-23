import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';

import styles from './styles';

const InputContainer = ({ classes, search, onSearch }) => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Input
        id='search'
        className={classes.search}
        placeholder={t('SEARCH')}
        disableUnderline={true}
        onChange={onChange}
      />
      {search &&
        <Button className={classes.button} type='submit'>
          <Search style={{ color: 'white' }} />
        </Button>
      }
    </form>
  );
};

InputContainer.propTypes = {
  search: PropTypes.bool
};

InputContainer.defaultProps = {
  search: false
};


export default withStyles(styles)(InputContainer);