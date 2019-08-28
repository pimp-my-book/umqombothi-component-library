import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../../index.css'

const LinkStyles = styled.a`
:after{
    border-radius: 1em;
    border-top: .1em solid #ED0677;
    content: "";
    position: absolute;
    right: 100%;
    bottom: .14em;
    left:0;
    transition: right .4s cubic-bezier(0,.5,0,1);
   
}

:hover:after{
    right:0;
}

`

const LinkButton = ({
    text,
    className,
    ...props

}) => {
    return(
    <LinkStyles
    {...props}
    className={`${className} text-pinkDarkest relative font-medium`}
    >
     {text}
    </LinkStyles>
    )}

export default LinkButton