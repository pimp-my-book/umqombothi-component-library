import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  HeadingFour from '../components/typography/HeadingFour'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'What did you find'
    const {getByText} = render(
        <HeadingFour
        text={text}
        />
    )

    expect(getByText(text))
})