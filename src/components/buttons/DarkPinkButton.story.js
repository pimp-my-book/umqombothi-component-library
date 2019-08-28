import  React from "react"

import {storiesOf} from "@storybook/react"
import DarkPinkButton from "./DarkPinkButton"

storiesOf("Dark Pink Button",module).add("basic example", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    
    />
))
.add("Large", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    large
    />
)).add("Long", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    long
    />
)).add("Loading", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    isLoading
    />
))