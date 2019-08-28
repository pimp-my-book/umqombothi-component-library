import React from 'react'
import PropTypes from 'prop-types'
import '../../index.css'


const LinkButton = ({
    text,
    className,
    ...props

}) => {
    return(
    <a
    {...props}
    className={`${className} text-pinkDarkest`}
    >
     {text}
    </a>
    )}

export default LinkButton