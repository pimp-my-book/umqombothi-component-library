import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  Textarea from '../components/inputs/Textarea'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

describe('<TextArea/>',()=>{

    test('It accepts text as a prop', ()=>{
        const value = 'Fi9nd time'
        const {queryByText} = render(
            <Textarea
            
            value={value}
            />
        )

        expect(queryByText(value))
      })
      
      
      test('It accepts the placeholder', ()=>{
          const placeHolder = 'Type in me'
          const value = 'Fi9nd time'

          const {queryByPlaceholderText} = render(
              <Textarea
              placeHolder={placeHolder}
              value={value}
              />
          )

          expect(queryByPlaceholderText(placeHolder))
        })
  
        
})