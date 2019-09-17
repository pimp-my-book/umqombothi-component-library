import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BodyText from '../components/typography/BodyText'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect'

describe('<Dropdown/>', () => {
    it('has options to chose from', () => {

        const { queryByText } = render(
            <Dropdown>
                <option>MTBDF</option>
                <option>Yezus</option>
                <option>Graduation</option>
            </Dropdown>
        )

        expect(queryByText('Yezus'))

    })

    it('Allows you to select something', () => {
        const { getByText, getByDisplayValue } = render(
            <Dropdown>
                <option>MTBDF</option>
                <option>Yezus</option>
                <option>Graduation</option>
            </Dropdown>
        )

        fireEvent.select(getByText('option'), { target: { value: 'Yezus' } })
        expect(getByDisplayValue('Yezus'))
    })
})