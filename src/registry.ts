export const registry = new FinalizationRegistry((message: string) => {
  alert(`🚮🗑️🚮 ${message} HAS BEEN COLLECTED 🚮🗑️🚮`)
})

export const registrySnippet = `
export const registry = new FinalizationRegistry((message: string) => {
  alert('🚮🗑️🚮 {message} HAS BEEN COLLECTED 🚮🗑️🚮')
})
`
