/* eslint-disable no-debugger */
import { registry } from './registry'

const nestedObjectsSnippet = `
const x = {}
const y = {}
const z = { x, y }

registry.register(x, 'X')
registry.register(y, 'Y')
registry.register(z, 'Z')

window.x = x
`

const nestedObjectsSnippetTest = () => {
  const x = {}
  const y = {}
  const z = { x, y }

  registry.register(x, 'X')
  registry.register(y, 'Y')
  registry.register(z, 'Z')

  // @ts-expect-error
  window.x = x
  debugger
}

const promiseSnippet = `
const brokenPromise = new Promise(() => {})
const someData = { someKey: 'some value' }
registry.register(someData, 'Some object')

await brokenPromise

console.log(someData)
`

const promiseSnippetTest = async () => {
  const brokenPromise = new Promise(() => {})
  const someData = { someKey: 'some value' }
  registry.register(someData, 'Some object')
  debugger

  await brokenPromise

  console.log(someData)
}

const promiseResolveSnippet = `
const brokenPromise = new Promise((res) => {
  window.resolve = res
})
const someData = { someKey: 'some value' }
registry.register(someData, 'Some object')
await brokenPromise

console.log(someData)
`

const promiseResolveSnippetTest = async () => {
  const brokenPromise = new Promise((res) => {
    // @ts-expect-error
    window.resolve = res
  })
  const someData = { someKey: 'some value' }
  registry.register(someData, 'Some object')
  debugger
  await brokenPromise

  console.log(someData)
}

const domSnippet = `
let node: HTMLDivElement | null = document.createElement('div')
document.body.appendChild(node)
registry.register(node, 'DOM node')

node = null
`

const domSnippetTest = () => {
  let node: HTMLDivElement | null = document.createElement('div')
  document.body.appendChild(node)
  registry.register(node, 'DOM node')

  node = null
  debugger
}

const registrySnippet = `
let registry: FinalizationRegistry<string> | null = new FinalizationRegistry(
  (message: string) => {
    alert('🚮🗑️🚮 {message} HAS BEEN COLLECTED 🚮🗑️🚮')
  }
)

registry.register(registry, 'registry')

registry = null
`

const registrySnippetTest = () => {
  let registry: FinalizationRegistry<string> | null = new FinalizationRegistry(
    (message: string) => {
      alert(`🚮🗑️🚮 ${message} HAS BEEN COLLECTED 🚮🗑️🚮`)
    }
  )

  registry.register(registry, 'registry')

  registry = null
  debugger
}

export const snippets = [
  {
    snippet: nestedObjectsSnippet,
    execute: nestedObjectsSnippetTest,
  },
  {
    snippet: promiseSnippet,
    execute: promiseSnippetTest,
  },
  {
    snippet: promiseResolveSnippet,
    execute: promiseResolveSnippetTest,
  },
  {
    snippet: domSnippet,
    execute: domSnippetTest,
  },
  {
    snippet: registrySnippet,
    execute: registrySnippetTest,
  },
]
