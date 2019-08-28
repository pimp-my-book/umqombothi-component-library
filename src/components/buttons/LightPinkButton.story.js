import  React from "react"
import {storiesOf} from "@storybook/react"
import LightPinkButton from "./LightPinkButton"

storiesOf("Light Pink Button",module).add("basic example", ()=>(
    <LightPinkButton
    text="Hello Sun"
    
    />
))
.add("Large", ()=>(
    <LightPinkButton
    text="Hello Sun"
    large
    />
)).add("Long", ()=>(
    <LightPinkButton
    text="Hello Sun"
    long
    />
)).add("Loading", ()=>(
    <LightPinkButton
    text="Hello Sun"
    isLoading
    />
))