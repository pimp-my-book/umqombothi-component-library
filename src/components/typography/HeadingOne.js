import React from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const HeadingOne = ({
text,
className
}) => {
    return(
       <p
       className={` `}
       >
           {text}
       </p>
    )
}

export default HeadingOne