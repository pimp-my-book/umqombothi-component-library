import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingTwo = ({
text,
className
}) => {
    return(
       <p
       className={`text-4xl font-display`}
       >
           {text}
       </p>
    )
}

export default HeadingTwo