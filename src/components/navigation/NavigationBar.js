/*
NAVIGATION BAR

FUNCTIONS:
---on click it changes the state of isMenuOpen

---Props
* classname
*children - to accept Additional JSX
* content to accepts menu items in the nav drawer


*/
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../../index.css'

const NavigationBar = ({
className='',
children,
content
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <nav
        className={`border-top bg-blueDarkest flex items-center justify-between flex-wrap bg-green-darker p-6`}
        >
        <div
        className={`flex items-center flex-no-shrink text`}
        >
          <img
             src="https://pmb-plus-assets.s3.amazonaws.com/pmb_plus_logo.svg"
             alt="PMB +"
             />
        
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
            {content}
        </div>

        </nav>
    )
}

const propTypes ={
    className: PropTypes.string,
    children: PropTypes.element,
    content: PropTypes.func
}
NavigationBar.propTypes = propTypes
export default NavigationBar