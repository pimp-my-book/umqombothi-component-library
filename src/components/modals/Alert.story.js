import React from 'react'
import {storiesOf} from '@storybook/react'
import Alert from './Alert'


storiesOf('Alert', module)
	.add('Success', ()=>(
		<Alert
        message='I am an alert'
        />
	))