
import React,{useState} from 'react';
//import PropTypes from 'prop-types';
import '../../index.css'

const NavigationBar = ({
className='',

}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <nav
        className={`border-top bg-blueDarkest flex items-center justify-between flex-wrap bg-green-darker p-6`}
        >
        <div
        className={`flex items-center flex-no-shrink text`}
        >
        PMB +
     
        </div>
        <div>

        </div>

        </nav>
    )
}

export default NavigationBar