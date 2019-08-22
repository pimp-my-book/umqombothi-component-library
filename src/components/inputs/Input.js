import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Input = ({
className,
value,
onChange,
small,
...props
})=>{
   
    return(
        <input
          className={`${className} 
          ${small ? 'border border-grey py-2 rounded-sm focus:outline-none w-16':'border border-grey py-2 px-5 rounded-sm focus:outline-none'} `}
          value={value}
          onChange={onChange}
          {...props}
        />
       )
    
}

export default Input