import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from "styled-components";
import '../../index.css'
import loading from '../../assets/loading.svg'


const propTypes ={
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    
}


const rotate = keyframes`
  from {
	  transform: rotate(0deg);
  }
  to {
	  transform: rotate(360deg);
  }
`;
const ImageStyles = styled.img`
 display: inline-block;  
 animation: ${rotate} 2s  infinite linear;
`;



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
            className={`${className} ${long ? 'bg-pinkDarkest text-white font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}' 
            : large ? 'bg-pinkDarkest text-white font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest ${className}': 
            'bg-pinkDarkest text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkDarkest hover:text-pinkDarkest '}`}
            onClick={onClick}
            disabled={disabled}
            >
            <ImageStyles
            
            src={loading}
            alt='loading...'
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
