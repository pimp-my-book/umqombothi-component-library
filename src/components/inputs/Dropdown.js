import React, { Children } from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const Dropdown = ({ children, ...props }) => {
    return (
        <select
            {...props}
        >


            {children}
        </select>
    )
}

export default Dropdown