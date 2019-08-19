import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  BodyText from '../components/typography/BodyText'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

test('It accepts text as a prop', ()=>{
    const text = 'Branded Cattle'
    const {getByText} = render(
        <BodyText
        text={text}
        />
    )

    expect(getByText(text))
})