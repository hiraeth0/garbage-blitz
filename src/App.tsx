import React from 'react'
import styled from 'styled-components'
import { SnippetBlock } from './SnippetBlock'
import { domSnippet, domSnippetTest, promiseSnippet, promiseSnippetTest } from './snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Container = styled.main`
  height: 100%;
  width: 100%;
  padding: 50px 12%;
`

const RegistryBlock = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

const Divider = styled.div`
  margin: 40px auto;
  width: 60%;
  border-bottom: solid 1px gray;
`

const registrySnippet = `
export const registry = new FinalizationRegistry(() => {
  alert('collected')
})
`

export const App: React.FC = () => {
  return (
    <Container>
      <RegistryBlock>
        <SyntaxHighlighter
          customStyle={{ fontSize: '1.3rem' }}
          showLineNumbers
          language='typescript'
          style={atomOneDarkReasonable}
        >
          {registrySnippet}
        </SyntaxHighlighter>
      </RegistryBlock>
      <Divider />
      <SnippetBlock snippet={promiseSnippet} onClickExecute={promiseSnippetTest} />
      <Divider />
      <SnippetBlock snippet={domSnippet} onClickExecute={domSnippetTest} />
    </Container>
  )
}
