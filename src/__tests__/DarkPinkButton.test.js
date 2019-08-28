import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  DarkPinkButton from '../components/buttons/DarkPinkButton'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

describe('<DarkPinkButton/>',()=>{
    it('Renders text props', ()=>{

        const text = 'shadows'
        const {getByText} = render(
            <DarkPinkButton
            text={text}
            />
        )
          
        expect(getByText(text))
    })

    it('Renders loading spinner props', ()=>{
        const {getByAltText} = render(
            <DarkPinkButton
            isLoading
            />
        )

        expect(getByAltText('loading...'))
    })
})