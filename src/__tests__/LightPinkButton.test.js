import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  LightPinkButton from '../components/buttons/LightPinkButton'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

describe('<LightPinkButton/>',()=>{
    it('Renders text props', ()=>{

        const text = 'shadows'
        const {getByText} = render(
            <LightPinkButton
            text={text}
            />
        )
          
        expect(getByText(text))
    })

    it('Renders loading spinner props', ()=>{
        const {getByAltText} = render(
            <LightPinkButton
            isLoading
            />
        )

        expect(getByAltText('loading...'))
    })
})