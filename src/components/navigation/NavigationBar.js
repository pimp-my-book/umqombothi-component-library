
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../../index.css'

const NavigationBar = ({
className='',
children,
props
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
        {children}
        <div className="block ">
           <span onClick={()=> setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2">
             <img
             src="https://pmb-static-assests.s3.amazonaws.com/menu.svg"
             alt="menu"
             />
           </span>
        </div>
        <div
        className={isMenuOpen ? 'block sm-600:block md:block sm-land:block':'hidden'}
        >
            {props.navdrawer}
        </div>

        </nav>
    )
}

const propTypes ={
    className: PropTypes.string,
    children: PropTypes.element,
    props: PropTypes.func
}

export default NavigationBar