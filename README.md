# Nob-Sql-Editor

# Playground for SQL on client side in React.

## About Project
It has implementation of React and Sql.js, A editor to play around live demo and try sql, for sql formatting also there are some implementation and a basic layout to modify it.

<!-- #default-branch-switch -->

## Demo

<!-- #default-branch-switch -->

View the demo at .

https://nob-sql-editor.netlify.app/

## Usage

On the base it uses sqlite on the client side which is accessed with the help of sql.js. Sql.js runs on wasm time.

You might need to do some changes in webpack to build it in your folder but follow sql.js documentation for it.

This config helped me, in webpack.config.js
 module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.wasm$/,
          type: 'javascript/auto',
      },

## Build

Made on node v14.17

```sh
yarn
yarn start
yarn test
yarn build
```
