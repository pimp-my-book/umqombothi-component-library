import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Input = ({
  className,
  value,
  onChange,
  small,
  ...props
}) => {

  return (
    <input
      className={`${className} 
          ${small ? 'border font-body border-grey py-2 rounded-sm focus:outline-none w-16' : 'border font-body border-grey py-2 px-5 rounded-sm focus:outline-none'} `}
      value={value}
      onChange={onChange}
      {...props}
    />
  )

}

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  small: PropTypes.bool
}
Input.propTypes = propTypes
export default Input