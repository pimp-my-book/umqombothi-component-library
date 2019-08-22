import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'
import { defaultCipherList } from 'constants';


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