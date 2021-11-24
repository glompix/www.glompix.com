import React from 'react'
import styled from '@emotion/styled'

interface SectionProps {
  children: React.ReactNode
  title: React.ReactNode
}

export default function Section({ children, title }: SectionProps) {
  return (
    <SectionOuterDiv>
      <Title>{title}</Title>
      <SectionInnerDiv>{children}</SectionInnerDiv>
    </SectionOuterDiv>
  )
}

const SectionOuterDiv = styled.div`
  margin-top: 40px;
`

const SectionInnerDiv = styled.div`
  margin-top: 30px;
  display: flex;
`

const Title = styled.h2`
  width: 100%;
`
