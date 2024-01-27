# Locally test your aos scripts

## Requirements

Latest version of nodejs +20 or greater

## Download the latest aos wasm

To get the latest process.wasm - see aos README - https://github.com/twilson63/ao-repl

```
curl -L -o process.wasm https://g8way.io/FXNqc3uftQc78gvKHGJjHKhjTklEdk0zP3sp9TEJNyc
``

## Initialize a Node Project

```sh
npm init -y
```

Configure your package.json to support modules

```json
{
  ...
  "type": "module",
  ...
}
```


## Install the ao Loader Package

```sh
npm install --save @permaweb/ao-loader
```

## Create Test Script File

`example.test.js`

```js
import { test } from 'node:test'
import * as assert from 'node:assert'

import AoLoader from '@permaweb/ao-loader'
import fs from 'fs'

const wasm = fs.readFileSync('./process.wasm')


test("basic", async () => {
  assert.ok(true)
})


```

## Run Tests

```sh
node --test
```


