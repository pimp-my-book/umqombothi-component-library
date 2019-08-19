import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  CaptionText from '../components/typography/CaptionText'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'Up all night'
    const {getByText} = render(
        <CaptionText
        text={text}
        />
    )

    expect(getByText(text))
})