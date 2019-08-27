import  React from "react"

import {storiesOf} from "@storybook/react"
import Textarea from "./Textarea"

storiesOf("Textarea",module).add("basic example", ()=>(
    <Textarea
    placeholder="type"
    />
))