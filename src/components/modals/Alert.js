import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'


const Alert = ({
    message,
    className,
    ...props,
    error,
    warning
}) => {
    return (
        <div>
            {message}
        </div>
    )
}

export default Alert