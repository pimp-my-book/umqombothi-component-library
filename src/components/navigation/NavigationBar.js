/*
NAVIGATION BAR

FUNCTIONS:
---on click it changes the state of isMenuOpen

---Props
* classname
*children - to accept Additional JSX
* content to accepts menu items in the nav drawer


*/
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types';
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = ({
    className = '',
    children,
    content
}) => {


    return (
        <Navbar
            className={`border-top bg-blueDarkest flex items-center justify-between flex-wrap bg-green-darker p-6`}
            expand="lg">
            <Navbar.Toggle><img
                src="https://pmb-static-assests.s3.amazonaws.com/menu.svg"
                alt="menu"
            /></Navbar.Toggle>
        </Navbar>

    )
}

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    content: PropTypes.func
}
NavigationBar.propTypes = propTypes
export default NavigationBar