import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Textarea = ({
className,
value,
onChange,
small,
...props
})=>{
   
    return(
        <Textarea
          className={`${className} 
          ${small ? 'border border-grey py-2 rounded-sm focus:outline-none w-16':'border border-grey py-2 px-5 rounded-sm focus:outline-none'} `}
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
Textarea.propTypes = propTypes
export default Textarea