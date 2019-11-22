import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 20,
  },
}));

const ClassicButton = ({
    text,
    color,
    onClick,
}) => {
  const classes = useStyles();

  return (

      <Button onClick={onClick} variant="contained" color={color} className={classes.button + ' Button'}>
        {text}
      </Button>
    
  )
}

export default ClassicButton;
