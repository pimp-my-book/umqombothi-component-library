import {configure} from '@storybook/react'

function loadStories(){
    const req = require.context('../stories', true, /\.stories\.js$)
    req.keys().foreach(filename => req(filename))

}

configure(loadStories, module)