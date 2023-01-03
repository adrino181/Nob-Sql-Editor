# Nob-Sql-Editor

# Playground for SQL on client side in React.

<!-- #default-branch-switch -->

## Demo

<!-- #default-branch-switch -->

View the demo at .

https://nob-sql-editor.netlify.app/

## Usage

On the base it uses sqlite on the client side which is accessed with the help of sql.js. Sql.js compiles it to WASM module.

You might need to do some changes in webpack to build it in your folder but follow sql.js documentation for it.

You can create tables and query them and using it like a wrapper for frontend to run intensive task which require large data handaling, saving your server cost. Deploy your wasm file to cdn and thats all.

## Build

Made on node v14.17

```sh
yarn
yarn start
yarn test
yarn build
```
