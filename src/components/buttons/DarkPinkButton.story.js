import  React from "react"

import {storiesOf} from "@storybook/react"
import DarkPinkButton from "./DarkPinkButton"

storiesOf("DarkPinkButton",module).add("basic example", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    />
))