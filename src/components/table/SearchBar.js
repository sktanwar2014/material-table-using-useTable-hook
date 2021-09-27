import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
//material
import {
  Box,
  TextField,
  InputAdornment,
  Tooltip
} from '@material-ui/core';


SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchText: PropTypes.func
};

export default function SearchBar ({ searchText, onSearchText }) {
  return (
    <Box>
      <TextField
        style={{margin:'2px'}}
        value={searchText}
        size="small"
        onChange={onSearchText}
        placeholder="Search..."
        InputProps={{
          startAdornment: <InputAdornment position='start'>
            <Tooltip title="Search">
              <SearchIcon />
            </Tooltip>
          </InputAdornment>,
        }}
      />
    </Box>
  )
}