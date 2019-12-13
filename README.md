# Umqombothi  🍶[![Build Status](https://travis-ci.org/pimp-my-book/umqombothi-component-library.svg?branch=master)](https://travis-ci.org/pimp-my-book/umqombothi-component-library)  ![npm](https://img.shields.io/npm/v/umqombothi-component-library?style=plastic)

This is the React component Library based off the Design System for ![PMB Plus](https://dggixahbp77tr.cloudfront.net/).

The design system can be viewed on [Figma](https://www.figma.com/file/MH0ruI8pUrg7s2NXM4jra59W/PMB?node-id=0%3A1)

### 🎉 Features
* Range of components from buttons, navs, inputs etc
* Uses TailwindCSS
* [Storybook](https://umqombothi.netlify.com) app to view all components.
* Ability to interact with components on [Bit](https://bit.dev/pimp-my-book/umqombothi).

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

## 🛰️SSR Usage

To render it with NextJS there are additional steps. Check out this Codesandbox for a working [example](https://codesandbox.io/s/hello-world-xmu4s?fontsize=14&hidenavigation=1&theme=dark).

### Steps to follow once you have your NextJS app setup:

This is just to make sure you have the correct setup in your `next.config.js` and modules installed. 😀

I. Install modules

```
$ yarn add umqombohti-component-library next-transpile-modules @zeit/next-css @svgr/webpack
```

II. Get your `next.config.js` setup correctly. 

The reason why you installed : `next-transpile-modules & @zeit/next-cs` was to tell Next that you need these files to be transpiled and included with your NextJS bundle for when you deploy your app.

```
//next.config.js

const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withTM({
    transpileModules: [
      "umqombothi-component-library",
      "bootstrap/dist/css/bootstrap.min.css"
    ],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config;
    }
  })
);

```

Because the lib includes svgs in it, we need to a loader so Next can read them. (Wow we do a lot for this Next thingy 🤨)


