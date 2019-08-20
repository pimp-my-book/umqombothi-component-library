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
           <BodyText
          className="text-white"
           text="Blog"
           />
           
           <BodyText
           className="text-white"
           text="Careers"
           />
           
           <BodyText
            className="text-white"
           text="About Pimp My Book"
           />
         </div>
         <div>
             {/*We can help you  col*/}
             <HeadingFive
           text="Make money with us"
           className="text-white text-sm"
           />
           <BodyText
          className="text-white"
           text="Sell on PMB Plus"
           />
           
           <BodyText
           className="text-white"
           text="Be a vendor on PMB Plus"
           />
         </div>
         <div>
             {/*Help col*/}
             <HeadingFive
           text="We Can Help You"
           className="text-white text-sm"
           />
           <BodyText
          className="text-white"
           text="Your orders"
           />
           
           <BodyText
           className="text-white"
           text="Shipping Policy"
           />
           <BodyText
           className="text-white"
           text="Returns & Refunds"
           />
            <BodyText
           className="text-white"
           text="Help"
           />
         </div>
         <div>
             {/*Logos col*/}
             <img
             src=""
             alt=""
             />
             <img
             src=""
             alt=""
             />
             <img
             src=""
             alt=""
             />
             <img
             src=""
             alt=""
             />
         </div>
         <div>
             {/*credits col*/}
         </div>
        </footer>
    )
}

export default Footer