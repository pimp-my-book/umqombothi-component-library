import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  HeadingTwo from '../components/typography/HeadingTwo'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'Im free'
    const {getByText} = render(
        <HeadingTwo
        text={text}
        />
    )

    expect(getByText(text))
})
