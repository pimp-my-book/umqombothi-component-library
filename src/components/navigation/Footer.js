import React from 'react';
import PropTypes from 'prop-types';
import BodyText from '../typography/BodyText'
import HeadingFive from '../typography/HeadingFive'
import CaptionText from '../typography/CaptionText'
import '../../index.css'

const Footer = ({
  className
}) => {
  return (
    <footer
      className={`${className} w-full fixed-bottom bottom-0 left-0  absolute bg-blueDarkest border-bottom`}
    >
      <div className="flex x:flex-row s:flex-col md:flex-row p-5">
        <div className="flex flex-col">
          {/*Make money with us col*/}
          <HeadingFive
            text="Get to know us"
            className="text-white text-justify"
          />
          <a href="https://newsroom.pimpmybook.co.za/">
            <BodyText
              className="text-white font-thin"
              text="Blog"
            />
          </a>
          <a href="">
            <BodyText
              className="text-white font-thin"
              text="Careers"
            />
          </a>
          <a href="https://newsroom.pimpmybook.co.za/company/">
            <BodyText
              className="text-white font-thin"
              text="About Pimp My Book"
            />
          </a>
        </div>
        <div className="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
          {/*We can help you  col*/}
          <HeadingFive
            text="Make money with us"
            className="text-white text-sm"
          />
          <BodyText
            className="text-white font-thin"
            text="Sell on PMB Plus"
          />

          <BodyText
            className="text-white font-thin"
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
            className="text-white font-thin"
            text="Your orders"
          />

          <BodyText
            className="text-white font-thin"
            text="Shipping Policy"
          />
          <BodyText
            className="text-white font-thin"
            text="Returns & Refunds"
          />
          <BodyText
            className="text-white font-thin"
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
          <div className="flex flex-col">
            <CaptionText
              className="text-white"
              text="Privacy Policy"
            />
            <CaptionText
              className="text-white"
              text="Terms and conditions"
            />
            <CaptionText
              className="text-white"
              text={`© ${new Date().getFullYear()} Pimp My Book`}
            />
          </div>


        </div>
      </div>

    </footer>
  )
}

const propTypes = {
  className: PropTypes.string
}
Footer.propTypes = propTypes
export default Footer