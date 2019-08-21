
import React from 'react'
import {render, fireEvent, getByAltText} from '@testing-library/react'
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
    
const onClick = jest.fn()
    it.skip('toggles open and close',()=>{
        const {getByText,getByLabelText} = render(
            <NavigationBar
            onClick={onClick}
            />
        )

        fireEvent.click(getByLabelText('menu'),{
            target:{
                files:[new File('https://pmb-static-assests.s3.amazonaws.com/menu.svg',{type:'image/svg'})]
            }
        })
        expect(onClick).toHaveBeenCalled(1);
    })

})