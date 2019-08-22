import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Input = ({
className,
value,
onChange,

})=>{
    return(
     <input
       className={`${className}`}
       value={value}
       onChange={onChange}
     />
    )
}

export default Input