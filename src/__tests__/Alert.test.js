import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert from '../components/modals/Alert'
import '@testing-library/jest-dom/extend-expect'

describe('<Alert/>', () => {
    it('Renders the alert message', () => {
        const message = 'I am ready to jump out the window'
        const { queryByText } = render(
            <Alert
                message={message}
            />
        )

        expectExport(queryByText(message))
    })
    it('Can close the alert', () => {

    })
})