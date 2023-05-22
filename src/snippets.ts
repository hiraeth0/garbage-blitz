/* eslint-disable no-debugger */
import { registry } from './registry'

export const promiseSnippet = `
const brokenPromise = new Promise(() => {})
const someData = { someKey: 'some value' }
registry.register(someData, undefined)
debugger

await brokenPromise

console.log(someData)
`

export const promiseSnippetTest = async () => {
  const brokenPromise = new Promise(() => {})
  const someData = { someKey: 'some value' }
  registry.register(someData, undefined)
  debugger

  await brokenPromise

  console.log(someData)
}

export const domSnippet = `
let node = document.querySelector('body')
registry.register(node!, undefined)

node = null
debugger
`

export const domSnippetTest = () => {
  let node = document.querySelector('body')

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  registry.register(node!, undefined)

  node = null
  debugger
}
