import React, { useState } from 'react'
import styled from 'styled-components'
import { snippets } from './snippets'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Button } from './styles/general'
import { registrySnippet } from './registry'

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

const SnippetContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`

const ButtonsContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;
`

export const App: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0)

  const { snippet, execute } = snippets[stepIndex]

  const goNext =
    stepIndex + 1 < snippets.length ? () => setStepIndex((prev) => prev + 1) : undefined

  const goPrev = stepIndex - 1 >= 0 ? () => setStepIndex((prev) => prev - 1) : undefined

  return (
    <Container>
      <RegistryBlock>
        <SyntaxHighlighter
          customStyle={{ fontSize: '1.3rem', alignSelf: 'flex-start' }}
          showLineNumbers
          language='typescript'
          style={atomOneDarkReasonable}
        >
          {registrySnippet.trim()}
        </SyntaxHighlighter>
      </RegistryBlock>
      <Divider />
      <SnippetContainer>
        <ButtonsContainer>
          <Button disabled={!goPrev} onClick={goPrev}>
            Назад
          </Button>
          <Button onClick={execute}>Запустить</Button>
          <Button disabled={!goNext} onClick={goNext}>
            Далее
          </Button>
        </ButtonsContainer>
        <SyntaxHighlighter
          customStyle={{ fontSize: '1.3rem', alignSelf: 'flex-start' }}
          showLineNumbers
          language='typescript'
          style={atomOneDarkReasonable}
        >
          {snippet.trim()}
        </SyntaxHighlighter>
      </SnippetContainer>
    </Container>
  )
}
