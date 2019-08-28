import React from 'react'
import PropTypes from 'prop-types'
import '../../index.css'
import loading from '../../assets/loading.svg'
const propTypes ={
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    
}

const loadingStyles = {
   
        animation: 'rotation 2s infinite linear',
        marginLeft:'550px'
  
    
    keyframes rotation{
        from {
            -webkitTransform: 'rotate(0deg)
        }
        to {
            -webkitTransform: 'rotate(359deg)'
        }
    }
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
   
      if(isLoading){
        return (
            <button
            className={`${className} ${long ? 'bg-pinkDarkest text-white font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}' : large ? 'bg-pinkDarkest text-white font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}': 
        'bg-pinkDarkest text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest '}`}
            onClick={onClick}
            disabled={disabled}
            >
            <img
            className={loadingStyles}
            src={loading}
            alt="loading..."
            />
              
            </button>
        )
      } else{
        return (
            <button
            className={`${className} ${long ? 'bg-pinkDarkest text-white font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}' : large ? 'bg-pinkDarkest text-white font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}': 
        'bg-pinkDarkest text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest '}`}
            onClick={onClick}
            disabled={disabled}
            >
              { text }
              
            </button>
        )
      }
    
}

DarkPinkButton.propTypes = propTypes
export default DarkPinkButton
