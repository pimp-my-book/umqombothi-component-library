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

        expect(queryByText(message))
    })

    it('Can close the alert', () => {
        const onClick = jest.fn()
        const message = 'I am ready to jump out the window'
        const { getByLabelText } = render(
            <Alert
                onClick={onClick}
                message={message}
            />
        )

        fireEvent.click(getByLabelText('close button'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})