import React from 'react';
//import PropTypes from 'prop-types';
import '../../index.css'

const Footer = ({
    className
}) => {
    return(
        <footer
        className={`${className} w-full h-150 absolute bg-blueDarkest border-bottom`}
        >
         <div>
             {/*Make money with us col*/}
         </div>
         <div>
             {/*We can help you  col*/}
         </div>
         <div>
             {/*Logos col*/}
         </div>
         <div>
             {/*credits col*/}
         </div>
        </footer>
    )
}

export default Footer