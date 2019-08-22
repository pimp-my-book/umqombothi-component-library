import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import  Input from '../components/inputs/Input'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

describe('<Input/>',()=>{

    test('It accepts text as a prop', ()=>{
        const value = 'Fi9nd time'
        const {getByText} = render(
            <Input
            
            value={value}
            />
        )

        expect(getByText(value))
      })
      
      
      test('It accepts the placeholder', ()=>{
          const placeHolder = 'Type in me'
          const {getByText} = render(
              <Input
              placeHolder={placeHolder}
              value={value}
              />
          )

          expect(getByText(placeHolder))
        })
  
        
})