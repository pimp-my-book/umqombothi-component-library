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
    isLoading,
    large,
    long
}) => {
   
       return (
            <button
            className={`${className} ${long ? 'bg-pinkDarkest text-white font-bold py-10 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}' : large ? 'bg-pinkDarkest text-white font-bold py-2 px-20 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}': 
        'bg-pinkDarkest text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest '}`}
            onClick={onClick}
            disabled={disabled}
            >
              { text }
              
            </button>
        )
    
}

DarkPinkButton.propTypes = propTypes
export default DarkPinkButton
