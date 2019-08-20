import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  HeadingFive from '../components/typography/HeadingFive'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'Cool & calm'
    const {getByText} = render(
        <HeadingFive
        text={text}
        />
    )

    expect(getByText(text))
})