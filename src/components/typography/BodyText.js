import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const BodyText = ({
text,
className
}) => {
    return(
       <p
       className={`text-lg font-body`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

BodyText.propTypes = propTypes;

export default BodyText