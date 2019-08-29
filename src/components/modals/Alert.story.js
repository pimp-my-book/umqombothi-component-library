import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './Alert'


storiesOf('Alert', module)
	.add('Success', () => (
		<Alert
			message='I am an alert'
		/>
	))
	.add('Error', () => (
		<Alert
			message='I am an error alert'
			error
		/>
	))
	.add('Warning', () => (
		<Alert
			message='I am an Warning alert'
			warning
		/>
	))