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
                aria-label="Alert"
                data-dismiss="alert"
                className={`${className} p-2 w-350 h-10 rounded-px ${error ? 'bg-red' : warning ? 'bg-orange' : 'bg-green'} flex flex-row relative`}
            >
                <div
                    className="mr-5">
                    {error ? <span aria-label="error emoji">🚨</span> : warning ? <span aria-label="warning emoji">🚧</span> : <div></div>}
                </div>

                <p
                    aria-label="alert message"
                    className="font-body">
                    {message}
                </p>
                <span
                    aria-label="close button"
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


const propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    warning: PropTypes.bool,
}

Alert.propTypes = propTypes
export default Alert