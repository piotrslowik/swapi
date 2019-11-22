import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({
    text,
}) => {
    return (
        <div className="Error">
            <img src="sad-yoda.png" alt="Error" />
            <p>{text}</p>
        </div>
    )
}

ErrorComponent.defaultProps = {
    text: 'Ooops...',
}

ErrorComponent.propTypes = {
    text: PropTypes.string,
}

export default ErrorComponent;
