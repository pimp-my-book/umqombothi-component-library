import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationBar from './NavigationBar'
import Input from '../inputs/Input'
import BodyText from '../typography/BodyText'

storiesOf("Nav", module)
    .add("Nav", () => (
        <NavigationBar
        >

            <div className="flex flex-row">
                <Input />


                <BodyText
                    className="text-white"
                    text="Sell your book"
                />
            </div>

        </NavigationBar>
    ))