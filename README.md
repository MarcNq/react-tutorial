# React Tutorial

## How to start
Clone this repository in a folder, then cd into it and execute:

```
> npm i
> npm start
```

Then go to [http://localhost:1234](http://localhost:1234) to see it alive. It will automatically reload on file changes.

Make sure you have Node.js and npm installed. On MacOS, it is recommended to install node using Homebrew.

## Switching Examples

To switch which example is being rendered, edit `src/index.js` to change it.

Example:

```js
ReactDOM.render(<Counter/>, document.getElementById('root'))
                   |
                   V
ReactDOM.render(<Form/>, document.getElementById('root'))
```
