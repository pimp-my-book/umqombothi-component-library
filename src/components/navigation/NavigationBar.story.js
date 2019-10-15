import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationBar from './NavigationBar'
import Input from '../inputs/Input'
import BodyText from '../typography/BodyText'

storiesOf("Nav", module)
    .add("Nav", () => (
        <NavigationBar
        >

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
    ))