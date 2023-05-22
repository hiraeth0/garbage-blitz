import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from './styles/general'

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

type SnippetBlockProps = {
  snippet: string
  onClickExecute: () => void
}

export const SnippetBlock: React.FC<SnippetBlockProps> = ({ onClickExecute, snippet }) => {
  return (
    <Container>
      <Button onClick={onClickExecute}>Запустить</Button>
      <SyntaxHighlighter
        customStyle={{ fontSize: '1.3rem' }}
        showLineNumbers
        language='typescript'
        style={atomOneDarkReasonable}
      >
        {snippet}
      </SyntaxHighlighter>
    </Container>
  )
}
