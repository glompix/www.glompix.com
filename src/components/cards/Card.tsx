import React, { useContext } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ModalContext } from './Modal'

interface CardProps {
  children: React.ReactNode
  href?: string
  ModalContent?: React.ReactNode
  title: React.ReactNode
}

export default function Card({ children, href, ModalContent, title }: CardProps) {
  const { showContent } = useContext(ModalContext)
  return (
    <CardOuterDiv
      onClick={() => {
        if (ModalContent) {
          showContent(ModalContent)
        } else if (href) {
          window.open(href, '_blank')?.focus()
        }
      }}
    >
      <CardTitle>{title}</CardTitle>
      <CardInnerDiv>{children}</CardInnerDiv>
    </CardOuterDiv>
  )
}

const CardOuterDiv = styled.div`
  cursor: pointer;
  margin: 0px 15px;
  padding: 0px;
  background-color: #333;
  width: 300px;
  border-radius: 15px;
  border: 2px solid #000;
  &:first-of-type {
    margin-left: 0px;
  }
  &:last-of-type {
    margin-right: 0px;
  }
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.32, 0.01, 0.29, 0.98);
  :hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    box-shadow: 0 0 18px 1px #ffffffcc;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.32, 0.01, 0.29, 0.98);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  &:hover::after {
    opacity: 1;
  }
`

const CardInnerDiv = styled.div``

const CardTitle = styled.h3`
  margin: 0px;
  padding: 20px 20px 5px 20px;
`

const CardImageCss = css`
  position: relative;
  top: 5px;
  border-radius: 0 0 15px 15px;
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const CardImage = styled.img`
  ${CardImageCss}
`

export const CardImagePadded = styled.img`
  ${CardImageCss}
  object-fit: contain;
  margin: 0 20%;
  width: 60%;
`
