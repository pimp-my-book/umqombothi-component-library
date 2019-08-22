import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'


const Input = ({
className,
value,
onChange,
...props
})=>{
    return(
     <input
       className={`${className} border border-grey`}
       value={value}
       onChange={onChange}
       {...props}
     />
    )
}

export default Input