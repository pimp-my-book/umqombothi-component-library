import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  HeadingOne from '../components/typography/HeadingOne'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'Hello World'
    const {getByText} = render(
        <HeadingOne
        text={text}
        />
    )

    expect(getByText(text))
})
