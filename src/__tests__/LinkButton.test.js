import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  LinkButton from '../components/buttons/LinkButton'
import '@testing-library/jest-dom/extend-expect'
import { get } from 'http';

describe('<LinkButton/>', ()=>{
    it('Renders the text prop',()=>{
        const text = 'set my people free'
        const {getByText} = render(
            <LinkButton
            text={text}
            />
        )

        expect(getByText(text))
    })
})
