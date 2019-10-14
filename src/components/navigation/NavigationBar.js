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
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarStyles = styled(Navbar)`
&&&{
    border-top: #ED0677 8px solid;
}
`
const NavigationBar = ({
    className = '',
    children,
    content
}) => {


    return (
        <NavBarStyles
            className=' bg-blueDarkest flex items-center justify-between flex-wrap bg-green-darker p-6'
            expand="lg">
            <Navbar.Brand> <img
                src="https://pmb-plus-assets.s3.amazonaws.com/pmb_plus_logo.svg"
                alt="PMB +"
            /></Navbar.Brand>
            <Navbar.Toggle><img
                aria-label="collapse-menu"
                src="https://pmb-static-assests.s3.amazonaws.com/menu.svg"
                alt="menu"
            /></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto" aria-label="collapse-items">
                    {children}
                </Nav>
            </Navbar.Collapse>
        </NavBarStyles>

    )
}

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    content: PropTypes.func
}
NavigationBar.propTypes = propTypes
export default NavigationBar