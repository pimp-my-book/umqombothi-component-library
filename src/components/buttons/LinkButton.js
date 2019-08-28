import React from 'react'
import PropTypes from 'prop-types'
import '../../index.css'


const LinkButton = ({
    text,
    className,

}) => {
    return(
    <a
    className={`${className} text-pinkDarkest`}
    >
     {text}
    </a>)}

export default LinkButton