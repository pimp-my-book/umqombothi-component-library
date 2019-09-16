import React from "react"
import { storiesOf } from "@storybook/react"
import Dropdown from "./Dropdown"

storiesOf("Dropdown", module).add("basic example", () => (
    <Dropdown
        placeholder="type"
    />
))