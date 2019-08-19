import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const CaptionText = ({
text,
className
}) => {
    return(
       <p
       className={`text-sm font-body`}
       >
           {text}
       </p>
    )
}

const propTypes ={
    className: PropTypes.string,
    text: PropTypes.string,
}

CaptionText.propTypes = propTypes;

export default CaptionText