import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from "styled-components";
import '../../index.css'
import loading from '../../assets/loading.svg'


const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool

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



const LightPinkButton = ({
  className = "",
  onClick,
  text,
  disabled = false,
  isLoading,
  large,
  long,
  ...props
}) => {

  if (isLoading) {
    return (
      <button
        /* eslint-disable no-template-curly-in-string*/
        className={`${className} ${long ? 'bg-pinkLight text-white font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight ${className}'
          : large ? 'bg-pinkLight text-white font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight ${className}' :
            'bg-pinkLight text-white font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none  border-2 hover:border-pinkLight hover:text-pinkLight '}`}
        onClick={onClick}
        disabled={disabled}
      >
        <ImageStyles

          src={loading}
          alt='loading...'
        />

      </button>
    )
  } else {
    return (
      <button
        className={`${className} ${long ? 'bg-pinkLight text-blueDarkest font-bold py-2 px-10 rounded-px hover:bg-white focus:outline-none  border-2 border-pinkLight  hover:border hover:border-pinkLight hover:text-pinkLight ${className}' :
          large ? 'bg-pinkLight text-blueDarkest font-bold py-4 px-8 rounded-px hover:bg-white focus:outline-none  border-2 border-pinkLight  hover:border hover:border-pinkLighthover:text-blueDarkest ${className}' :
            'bg-pinkLight text-blueDarkest font-bold py-2 px-8 rounded-px hover:bg-white focus:outline-none border-2 border-pinkLight  hover:border hover:border-pinkLight hover:text-blueDarkest '}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}

      </button>
    )
  }

}

LightPinkButton.propTypes = propTypes
export default LightPinkButton
