import React, { useContext } from 'react'
import styled from '@emotion/styled'
import FloralShoppeMp4 from '../../../images/floral-shoppe.mp4'
import ThumbPng from './thumb.png'
import Card, { CardImage } from '../Card'
import { ModalContent, ModalIframe, ModalTitle } from '../Modal'

interface FloralShoppeCardProps {}

const TheEmoji = styled.div`
  font-size: 56px;
  line-height: 100%;
  float: right;
`

function FloralShoppeModal() {
  return (
    <div>
      <TheEmoji>🏳️‍⚧️</TheEmoji>
      <ModalTitle className="rainbow-text">Floral Shoppe.js</ModalTitle>
      <ModalContent>
        <div>
          <p>An ode to the breakthrough Vaporwave album by Macintosh Plus a.k.a. Vektroid. </p>
          <div>Samantha Branham (2018, threejs)</div>
        </div>
      </ModalContent>
      <ModalIframe src="https://www.glompix.com/sketch/floral-shoppe/index.html" />
      {/* <video autoPlay loop muted type="video/mp4" src={FloralShoppeMp4} /> */}
    </div>
  )
}

export default function FloralShoppeCard({}: FloralShoppeCardProps) {
  return (
    <Card title="Floral Shoppe" ModalContent={FloralShoppeModal}>
      <CardImage src={ThumbPng} />
    </Card>
  )
}
