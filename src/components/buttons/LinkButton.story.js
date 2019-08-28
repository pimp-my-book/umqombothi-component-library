import  React from "react"
import {storiesOf} from "@storybook/react"
import LinkButton from "./LinkButton"

storiesOf("Link Button",module).add("basic example", ()=>(
    <LinkButton
    text="Hello Sun"
    href="/work"
    />
))
