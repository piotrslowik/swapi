import React from 'react';
import PropTypes from 'prop-types';

import { isObjectEmpty } from '../../logic/helpers';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PlayerPanel = ({
    points,
    no,
    character,
}) => {

    const useStyles = makeStyles({
        card: {
          minWidth: 275,
          padding: 20,
        },
        title: {
          fontSize: 14,
        },
        points: {
          marginTop: 12,
          marginBottom: 30,
          textAlign: 'center',
        },
        name: {
            fontWeight: 700,
            fontSize: 26,
            marginBottom: 10,
        },
      });

      const classes = useStyles();

      const renderPersonInfo = ({mass, height}) => {
          return (
        <React.Fragment>
            <Typography variant="h5" component="p">
                {`Mass: ${mass}`}
            </Typography>
            <Typography variant="h5" component="p">
                {`Height: ${height}`}
            </Typography>
        </React.Fragment>
        )
      };

      const renderStarshipInfo = ({crew, MGLT, length, passengers}) => {
          return (
        <React.Fragment>
            <Typography variant="h5" component="p">
                {`Crew: ${crew}`}
            </Typography>
            <Typography variant="h5" component="p">
                {`MGLT per hour: ${MGLT}`}
            </Typography>
            <Typography variant="h5" component="p">
                {`Length: ${length}`}
            </Typography>
            <Typography variant="h5" component="p">
                {`Passengers: ${passengers}`}
            </Typography>
        </React.Fragment>
        )
      };

    const renderInfo = () => {
        if (!isObjectEmpty(character)) {
            if (character.mass) return renderPersonInfo(character)
            else return renderStarshipInfo(character)
        }
    }
    
    return (
        <Card className={classes.card + ` PlayerPanel Player${no}`}>
            <CardContent>
                <Typography variant="h6" component="p">
                    {`Player ${no}`}
                </Typography>
                <Typography variant="h4" component="p" className={classes.points}>
                    {`Points: ${points}`}
                </Typography>
                <Typography className={classes.name} component="p">
                    {character.name}
                </Typography>
                { renderInfo() }
            </CardContent>
        </Card>
    )
}

PlayerPanel.defaultProps = {
    points: 0,
    character: {},
}

const spaceshipShape = PropTypes.shape({
    crew: PropTypes.number,
    length: PropTypes.number,
    MGLT: PropTypes.number,
    passengers: PropTypes.number,
})

const personShape = PropTypes.shape({
    mass: PropTypes.number,
    height: PropTypes.number,
})

PlayerPanel.propTypes = {
    points: PropTypes.number,
    no: PropTypes.number,
    character: PropTypes.oneOfType([spaceshipShape, personShape]),
}

export default PlayerPanel;
