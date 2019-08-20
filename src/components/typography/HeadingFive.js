import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingFive = ({
text,
className
}) => {
    return(
       <p
       className={`text-xl font-body ${className}`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

HeadingFive.propTypes = propTypes;

export default HeadingFive