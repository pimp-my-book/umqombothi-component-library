# Umqombothi  🍶

[![Build Status](https://travis-ci.org/pimp-my-book/umqombothi-component-library.svg?branch=master)](https://travis-ci.org/pimp-my-book/umqombothi-component-library)
![npm](https://img.shields.io/npm/v/umqombothi-component-library?style=plastic)
This is the React component Library based off the Design System for PMB Plus.

### 🎉 Features
* Range of components from buttons, navs, inputs etc
* Uses TailwindCSS
* [Storybook](https://umqombothi.netlify.com) app to view all components.

## 📦 Installation

You can easily install the library via NPM or Yarn:

**npm**
```
$ npm install umqombothi-component-library
```

**yarn**

```
$ yarn add umqombothi-component-library
```

## 🌪️ Usage

You can import the components like so:

```
import React from 'react'
import {Input} from 'umqombothi-component-library'
import ReactDOM from 'react-dom';

function App() {
  return (
    <Input
    value={this.state.inputValue}
    placeholder="Type in me"
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

```
