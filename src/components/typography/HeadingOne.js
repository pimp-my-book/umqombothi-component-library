import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingOne = ({
text,
className
}) => {
    return(
       <p
       className={`text-5xl font-display ${className}`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

HeadingOne.propTypes = propTypes;

export default HeadingOne