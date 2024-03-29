import React, { Children } from 'react'
import PropTypes from 'prop-types';
import '../../index.css'

const Dropdown = ({ className, children, ...props }) => {
    return (
        <select
            aria-label='dropdown-select'
            className={`${className} px-5 py-2 font-body`}
            {...props}
        >
            {children}
        </select>
    )
}

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.array
}

Dropdown.propTypes = propTypes
export default Dropdown