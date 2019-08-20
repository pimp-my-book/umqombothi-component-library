import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const BodyText = ({
text,
className,
regular
}) => {
    if(regular){
        return(
            <p
            className={`text-lg font-body ${className}`}
            >
                {text}
            </p>
         )
    } else {
        return(
            <p
            className={`text-sm font-body ${className}`}
            >
                {text}
            </p>
         )
    }
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

BodyText.propTypes = propTypes;

export default BodyText