import { test } from 'node:test'
import * as assert from 'node:assert'

import AoLoader from '@permaweb/ao-loader'
import fs from 'fs'

const wasm = fs.readFileSync('./process.wasm')

const env = { Process: { Id: "DUMMY-PROCESS-ID", Tags: [] }}

test("basic", async () => {
  const msg = {
    Target: "DUMMY-PROCESS-ID",
    From: "SOME-PROCESS-ID",
    Tags: [
     { name: "Action", value: "Eval" }
    ],
    Data: 'print("Hello World")'
  }
  const handle = await AoLoader(wasm)
  const Result = await handle(null, msg, env)
  assert.deepEqual(Result.Output.data.output, "Hello World")
})

