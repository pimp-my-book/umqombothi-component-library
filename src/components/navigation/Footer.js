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
        className={`${className} w-full fixed-bottom bottom-0 left-0 h-250 absolute bg-blueDarkest border-bottom`}
        >
        <div className="flex x:flex-row s:flex-col md:flex-row p-5">
        <div className="flex flex-col">
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
         <div className="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
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
         <div className="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
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
         <div className="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
             {/*Logos col*/}
             <img
             src="https://pmb-plus-assets.s3.amazonaws.com/pmb_plus_logo.svg"
             alt="pmb plus logo"
             />
             <div className="flex flex-row mt-3 ml-5 p-3">
             <img
             className="p-2"
             src="https://pmb-plus-assets.s3.amazonaws.com/instagram.svg"
             alt="instagram logo"
             />
             <img
             className="pr-2"
             src="https://pmb-plus-assets.s3.amazonaws.com/facebook.svg"
             alt="facebook logo"
             />
             <img
             
             src="https://pmb-plus-assets.s3.amazonaws.com/twitter.svg"
             alt="twitter logo"
             />
             </div>
         </div>
         <div className="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
             {/*credits col*/}
           <div className="flex flex-row">
           <img
           className="pr-2"
             src="https://pmb-plus-assets.s3.amazonaws.com/mastercard-2.svg"
             alt="mastercard logo"
             />
             <img
             src="https://pmb-plus-assets.s3.amazonaws.com/visa.svg"
             alt="visa logo"
             />
           </div>
             <CaptionText
             text="Privacy Policy"
             />
             <CaptionText
             text="Terms and conditions"
             />
             <CaptionText
             text={`© ${new Date().getFullYear()} Pimp My Book`}
             />
         </div>
        </div>
         
        </footer>
    )
}

export default Footer