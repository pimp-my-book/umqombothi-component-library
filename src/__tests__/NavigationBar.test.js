
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  NavigationBar from '../components/navigation/NavigationBar'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

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

describe('<NavigationBar/>', ()=>{
    

    it('toggles open and close',()=>{
        const {getByText,getByLabelText} = render(
            <NavigationBar/>
        )

        fireEvent.click(getByText('span'))

    })
    
})