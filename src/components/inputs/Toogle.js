import React from 'react'
import styled from 'styled-components'
const Toogle = () => {

    const SliderStyles = styled.span`
    &:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 26px;
        border-radius: 50%;
    }

    background-color: #66bb6a;
    background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;

    &:before{
        transform: translateX(26px);
    }

    border-radius: 34px;
    `

    const InputStyles = styled.input`
    &:checked {
        background-color: #66bb6a;
    }

    &:checked {
        transform: translateX(26px);
    }
    `
    return (
        <>
            <label className="inline-block w-4 h-6 relative hidden">
                <InputStyles className="hidden" type="checkbox" />
                <SliderStyles />
            </label>
        </>
    )
}
export default Toogle