import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from '../components/inputs/Dropdown'
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
        const { getByText, getByLabelText, getByDisplayValue } = render(
            <Dropdown>
                <option>MTBDF</option>
                <option>Yezus</option>
                <option>Graduation</option>
            </Dropdown>
        )

        fireEvent.select(getByLabelText('dropdown-select'), { target: { value: 'Yezus' } })
        expect(getByDisplayValue('Yezus'))
    })
})