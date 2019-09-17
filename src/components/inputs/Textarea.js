import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Textarea = ({
  className,
  value,
  onChange,

  ...props
}) => {

  return (
    <textarea
      className={`${className} 
       border border-grey font-body  py-10 px-16 rounded-sm focus:outline-none `}
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

}
Textarea.propTypes = propTypes
export default Textarea