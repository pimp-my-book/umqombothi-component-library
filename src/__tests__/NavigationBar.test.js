
import React from 'react'
import { render, fireEvent, getByAltText } from '@testing-library/react'
import NavigationBar from '../components/navigation/NavigationBar'
import Input from '../components/inputs/Input'
import BodyText from '../components/typography/BodyText'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect'

///////////////////////////////////////////////////////////////////////
/* Comoponent Behaviours
-- Describe what the component does

: [ADD_STEPS] =>


--Post Condition for Success

--Post Condition for failure


Component Contracts
* These are properties that are legally binding 
for the components success and usability


///////////////////////////////////////////////////////////////////////
*/

describe('<NavigationBar/>', () => {

    it('It renders the children components', () => {
        const { getByText, getByLabelText } = render(
            <NavigationBar>
                <div className="flex lg:flex-row sm:flex-col p-3">
                    <Input />


                    <BodyText
                        className="text-white p-2"
                        text="Sell your book"
                    />
                    <BodyText
                        className="text-white p-2"
                        text="Get help"
                    />
                    <BodyText
                        className="text-white p-2"
                        text="Fall from a tree"
                    />
                </div>
            </NavigationBar>
        )

        expectExport(getByText('Get help'))

    })

})