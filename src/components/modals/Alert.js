import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'


const Alert = ({
    message,
    className,
    ...props
}) =>{
    return(
        <div>
            {message}
        </div>
    )
}

export default Alert