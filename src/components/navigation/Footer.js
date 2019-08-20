import React from 'react';
//import PropTypes from 'prop-types';
import BodyText from '../typography/BodyText'
import HeadingFive from '../typography/HeadingFive'
import CaptionText from '../typography/CaptionText'
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
           <HeadingFive
           text="Get to know us"
           className="text-white text-sm"
           />
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