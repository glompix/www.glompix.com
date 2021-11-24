import React from 'react'
import icon from '../images/avatar.png'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`

const AvatarImage = styled.img`
  width: 366px;
  height: 399px;
  display: inline-block;
  margin: 0 auto 30 0;
  animation: bounce 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;

  @keyframes bounce {
    0% {
      transform: translate(0px, -15px);
    }
    50% {
      transform: translate(0px, 15px);
    }
    100% {
      transform: translate(0px, -15px);
    }
  }
`

// markup
export default function FaceSheet() {
  return (
    <Container>
      <AvatarImage src={icon} alt="Samantha Branham's Avatar" />
      <h1>Samantha Branham (@glompix)</h1>
    </Container>
  )
}
