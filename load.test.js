import { test } from 'node:test'
import * as assert from 'node:assert'

import AoLoader from '@permaweb/ao-loader'
import fs from 'fs'

const wasm = fs.readFileSync('./process.wasm')
const litespeed = fs.readFileSync('./token.lua', 'utf-8')

const env = { Process: { Id: "DUMMY-PROCESS-ID", Tags: [] }}

function evaluate(data) {
  return {
    Target: "DUMMY-PROCESS-ID",
    From: "SOME-PROCESS-ID",
    Tags: [
     { name: "Action", value: "Eval" }
    ],
    Data: data
  }
}

test("load", async () => {
  const load = evaluate(litespeed) 
  const handle = await AoLoader(wasm)
  const loaded = await handle(null, load, env)
  
  const msg = evaluate("Name")

  const Result = await handle(loaded.memory, msg, env)

  assert.deepEqual(Result.Output.data.output, "Points Coin")
})

