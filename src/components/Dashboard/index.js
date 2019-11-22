import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';
import Button from '../Button';

const Dashboard = ({
    charTypes,
    chosenCharType,
    chooseChar,
    chosenTrait,
    chooseTrait,
    onClick,
}) => {

    
    return (
        <div className="Dashboard">
            <Select
                options={charTypes}
                label="Who should fight?"
                selected={chosenCharType.value}
                onSelect={chooseChar}
            />
            <Select
                options={chosenCharType.traits}
                label="What should matter?"
                selected={chosenTrait.value}
                onSelect={chooseTrait}
            />
            <Button
                text="Play!"
                onClick={onClick}
                color="primary"
            />
        </div>
    )
}

Dashboard.defaultProps = {
    charTypes: [],
    chosenCharType: {value: '', id: 0},
    chooseChar: () => {},
    chosenTrait: {value: '', id: 0},
    chooseTrait: () => {},
    onClick: () => {},
}

const shape = PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.number,
});

Dashboard.propTypes = {
    charTypes: PropTypes.arrayOf(shape),
    chosenCharType: shape,
    chooseChar: PropTypes.func,
    chosenTrait: shape,
    chooseTrait: PropTypes.func,
    onClick: PropTypes.func,
}

export default Dashboard;
