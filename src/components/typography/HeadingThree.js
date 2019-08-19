import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingThree = ({
text,
className
}) => {
    return(
       <p
       className={`text-3xl font-display`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

HeadingThree.propTypes = propTypes;

export default HeadingThree