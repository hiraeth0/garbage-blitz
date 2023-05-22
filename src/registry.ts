export const registry = new FinalizationRegistry(() => {
  alert('collected')
})
