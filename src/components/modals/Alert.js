import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../../index.css'


const Alert = ({
    message,
    className,
    error,
    warning,
    ...props,
}) => {
    const [showAlert, setAlert] = useState(true)

    const hideAlert = () => {
        setAlert(!showAlert)
    }
    if (showAlert) {
        return (
            <div
                {...props}
                aria-label="Close"
                data-dismiss="alert"
                className={`${className} p-2 w-350 h-10 ${error ? 'bg-red' : warning ? 'bg-yellow' : 'bg-green'} flex flex-row relative`}
            >

                <p
                    className="font-body">
                    {message}
                </p>
                <span
                    onClick={hideAlert}
                    className="right-0 top-0 absolute mr-2 cursor-pointer"
                >&times;</span>
            </div>
        )
    }
    else {
        return (<div></div>)
    }

}

export default Alert