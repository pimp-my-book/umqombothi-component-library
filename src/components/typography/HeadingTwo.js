import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingTwo = ({
text,
className
}) => {
    return(
       <p
       className={`text-4xl font-display ${className}`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

HeadingTwo.propTypes = propTypes;
export default HeadingTwo