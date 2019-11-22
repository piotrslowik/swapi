import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectOption = ({
    options,
    selected,
    onSelect,
    label,
    }) => {

    const useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 180,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        select: {
          fontSize: 22,
          textTransform: 'capitalize',
        },
        label: {
          fontSize: 19,
        },
        item: {
          textTransform: 'capitalize',
        }
    }));

    const classes = useStyles();

    const handleChange = event => {
        const selected = options.find(option => option.value === event.target.value);
        onSelect(selected);
    };



  const renderOptions = () => {
    return options.map(option => {
        return (
            <MenuItem className={classes.item} value={option.value} key={option.id}>{option.value}</MenuItem>
        )
    })
}

  return (
    <div >
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label" className={classes.label}>{label}</InputLabel>
        <Select className={classes.select}
          labelId="select-label"
          id="select"
          value={selected}
          onChange={handleChange}
        >
          {renderOptions()}
        </Select>
      </FormControl>      
    </div>
  );
}

SelectOption.defaultPrios = {
    options: [],
    selected: {},
    onSelect: () => {},
    label: '',
}

SelectOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })),
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func,
    label: PropTypes.string,
}

export default SelectOption;
