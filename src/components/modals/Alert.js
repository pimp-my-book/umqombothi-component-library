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
            className={`${className} p-2 w-350 h-10 bg-green flex flex-row relative`}
        >

            <p
                className="font-body">
                {message}
            </p>
            <span

                className="right-0 top-0 absolute mr-2 cursor-pointer"
            >X</span>
        </div>
    )
}

export default Alert