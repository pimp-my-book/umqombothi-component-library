import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'


const Alert = ({
    message,
    className,
    error,
    warning,
    ...props,
}) => {
    return (
        <div
            className={`${className}  w-350 h-10 bg-green`}
        >
            {message}
        </div>
    )
}

export default Alert