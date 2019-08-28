import React from 'react'
import {storiesOf} from '@storybook/react'
import BodyText from './BodyText'
import CaptionText from './CaptionText'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import HeadingFour from './HeadingFour'
import HeadingFive from './HeadingFive'

storiesOf('Typography', module)
	.add('Heading One', ()=>{
		<HeadingOne
			text="Heading One"
		/>
	})
	.add('Heading Two',()=>{
		<HeadingTwo
			text="Heading Two"
		/>
	})
	.add('Heading Three',()=>{
		<HeadingThree
			text="Heading Three"
		/>
	})
	.add('Heading Four',()=>{
		<HeadingFour
			text="Heading Four"
		/>
    })
    .add('Heading Five',()=>{
		<HeadingFive
			text="Heading Five"
		/>
    })
    .add('Caption Text',()=>{
		<CaptionText
			text="Caption Text"
		/>
	})