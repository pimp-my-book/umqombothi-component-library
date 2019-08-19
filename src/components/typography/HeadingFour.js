import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingFour = ({
text,
className
}) => {
    return(
       <p
       className={`text-2xl font-body`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

HeadingFour.propTypes = propTypes;

export default HeadingFour