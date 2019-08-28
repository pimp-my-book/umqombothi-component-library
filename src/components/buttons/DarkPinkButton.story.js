import  React from "react"

import {storiesOf} from "@storybook/react"
import DarkPinkButton from "./DarkPinkButton"

storiesOf("Dark Pink Button",module).add("basic example", ()=>(
    <DarkPinkButton
    text="Hello Sun"
    />
))