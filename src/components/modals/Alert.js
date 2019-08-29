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
            {...props}
            className={`${className} p-2 w-350 h-10 bg-green`}
        >
            {...props}
            <p
                className="font-body">
                {message}</p>
        </div>
    )
}

export default Alert