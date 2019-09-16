import React from "react"
import { storiesOf } from "@storybook/react"
import Dropdown from "./Dropdown"

storiesOf("Dropdown", module).add("basic example", () => (
    <Dropdown
        placeholder="type"
    >
        <option>iPad</option>
        <option>iMac</option>
        <option>AirPods</option>
        <option>iDONTcare</option>
    </Dropdown>
))