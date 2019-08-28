import React from 'react'
import PropTypes from 'prop-types'
import '../../index.css'

const propTypes ={
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    
}

const DarkPinkButton = ({
    className = "",
    onClick,
    text,
    disabled = false,
    isLoading
    
}) => {
   
       return (
            <button
            className={`bg-pinkDarkest text-white font-bold py-2 px-8 rounded-px  ${className}`}
            onClick={onClick}
            disabled={disabled}
            >
              { text }
              
            </button>
        )
    
}

DarkPinkButton.propTypes = propTypes
export default DarkPinkButton
