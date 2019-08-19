import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  HeadingThree from '../components/typography/HeadingTwo'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'I know magik'
    const {getByText} = render(
        <HeadingThree
        text={text}
        />
    )

    expect(getByText(text))
})