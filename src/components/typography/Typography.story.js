import React from 'react'
import {storiesOf} from '@storybook/react'
import BodyText from './BodyText'
import CaptionText from './CaptionText'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import HeadingFour from './HeadingFour'
import HeadingFive from './HeadingFive'

storiesOf("Typography", module)
.add("Heading One", ()=>{
    <HeadingOne
    text="Heading One"
    />
})