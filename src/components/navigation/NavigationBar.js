import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'

const NavigationBar = ({
className='',

}) => {
    return(
        <nav
        className={`border-top flex items-center justify-between flex-wrap bg-green-darker p-6`}
        >
        <div
        className={`flex items-center flex-no-shrink text`}
        >

        </div>

        </nav>
    )
}

export default NavigationBar