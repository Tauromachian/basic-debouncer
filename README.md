# Basic Debouncer

The objective of this module is to make a very simple and lightweight debouncer.
In case you are looking for something with more options my advise would one from lodash, debouncer or debounceify modules.

## How to import

CommonJS

```js
const debounce = require("debouncer");
```

ES6 module syntax

```js
import debounce from "debouncer";
```

## How to use

Method:

- debounce(timeout, callback)

### Examples

```js
const debounce = require("debouncer");

let i = 0;
const callbackFunction = () => {
  i++;
};
for (let index = 5; index > 0; index--) {
  debounce(() => {
    callbackFunction();
    console.log(i);
  }, 10);
}
```

In this example 1 will be printed.

If no timeout is provided 200 will be picked by default

# Status

https://img.shields.io/bundlephobia/min/basic-debouncer
